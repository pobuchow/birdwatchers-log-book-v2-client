import React from "react";
import Button from '@material-ui/core/Button';
import AddObservationDialog from './../dialog/AddObservationDialog';

export default function AddObservationButton() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add new observation
      </Button>
      <AddObservationDialog isOpen={open} onCloseDialog={handleClose}/>
    </div>
  );
}
