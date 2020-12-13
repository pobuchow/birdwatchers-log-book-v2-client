import React from "react";

import AddObservationPanel from './../panel/AddObservationPanel';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

export default function AddObservationDialog(props) {

  const handleClose = () => {
    props.onCloseDialog();
  };

  const handleSave = () => {
    console.log('saved');
    handleClose();
  };

  return (
    <div>
     <Dialog open={props.isOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">add new observation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add new observation, please enter data here.
          </DialogContentText>
          <AddObservationPanel />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
