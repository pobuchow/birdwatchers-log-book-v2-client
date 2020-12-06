import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { observationService } from "../../../services/observationService";

const columns = [
  { id: "speciesName", label: "Name", minWidth: 170, align: "left" },
  { id: "date", label: "Date", minWidth: 100, align: "left" },
];

const useStyles = makeStyles({
  "@global": {
    "*::-webkit-scrollbar": {
      width: "0.4em",
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.1)",
      outline: "1px solid slategrey",
    },
  },
  root: {
    width: "80%",
    margin: "auto",
    marginTop: "25px",
    backgroundColor: "#BFAE56",
    color: "#595142",
  },
  container: {
    maxHeight: 440,
    backgroundColor: "#BFAE56",
  },
});

export default function ObservationPanel(props) {
  const classes = useStyles();

  const [observations, setObservations] = useState([]);

  useEffect(() => {
    async function fetchObservations() {
      const result = await observationService.getLastObservationsForAuthUser(
        props.size
      );
      setObservations(result);
    }
    fetchObservations();
  }, [props.size]);

  async function handleDelete(id) {
    observationService.deleteObservationForAuthUser(id).then(async () => {
      const result = await observationService.getLastObservationsForAuthUser(
        props.size
      );
      setObservations(result);
    });
  }

  return (
    <Paper className={classes.root} data-testid="observation-panel-paper">
      Your last observations
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    backgroundColor: "#BFAE56",
                    borderBottom: "none",
                    color: "#595142",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody data-testid="observation-panel-table-body">
            {observations.map((observation) => {
              return (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={observation.id}
                >
                  {columns.map((column) => {
                    const value = observation[column.id];
                    return (
                      <TableCell
                        key={column.id}
                        style={{
                          borderBottom: "none",
                          color: "#595142",
                        }}
                        align={column.align}
                      >
                        {column.format && typeof value === "number"
                          ? column.format(value)
                          : value}
                      </TableCell>
                    );
                  })}
                  <TableCell
                    align="right"
                    style={{
                      borderBottom: "none",
                      color: "#595142",
                    }}
                  >
                    <IconButton
                      aria-label="delete"
                      className={classes.margin}
                      onClick={() => handleDelete(observation.id)}
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
