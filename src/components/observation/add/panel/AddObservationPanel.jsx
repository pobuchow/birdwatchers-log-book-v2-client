import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { DatePicker } from "@material-ui/pickers";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

export default function AddObservationPanel() {

  const [observationDate, handleDateChange] = useState(new Date());

  return (
    <div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <TextField
        autoFocus
        margin="dense"
        id="name"
        label="Species name"
        type="text"
      />
      <DatePicker
        label="observation date"
        value={observationDate}
        onChange={handleDateChange}
        variant="inline"
        animateYearScrolling
      />  
    </MuiPickersUtilsProvider> 
    </div>
  );
}
