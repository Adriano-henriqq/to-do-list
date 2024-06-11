import React, { Component } from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@material-ui/core';

class DeleteTaskDialog extends Component {
    handleCancel = () => {
        this.props.onClose(false);
      };
    
      handleConfirm = () => {
        this.props.onClose(true);
      };
    

  render() {
    const { open} = this.props;

    return (
      <Dialog
        open={open}
        onClose={this.handleCancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirmação de Exclusão"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Você realmente deseja excluir esta tarefa?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant='contained' onClick={this.handleCancel} color="primary">
            Cancelar
          </Button>
          <Button variant='contained' onClick={this.handleConfirm} color="default">
            Sim
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default DeleteTaskDialog;
