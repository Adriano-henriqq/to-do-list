import { Button, DialogActions, DialogContent, DialogTitle, withStyles } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import React, { Component } from 'react';
import ModalForm from '../modalForm';
import MyContext from '../../context/context';
import { styles } from './stylesDialog';


class DialogForm extends Component {
    static contextType = MyContext;

    state = { open: false , error: false}

    handleClickOpen = () => {
        this.setState({ open: true });

        
    }
    handleClickClose = () => {
        this.setState({ open: false });
    };
    handleAddTask = (event) => {
        event.preventDefault();
        const { addTask} = this.context;
        
        addTask();
        
           
        
    };
    render() {
        const { classes} = this.props;
        
        return (
            <div>
                <Button variant="contained" color="primary" onClick={this.handleClickOpen}>Nova Tarefa</Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClickClose}
                    maxWidth="sm"
                    fullWidth
                >
                    <DialogTitle>
                        Nova Tarefa
                    </DialogTitle>
                    <DialogContent className={classes.dialogContent}>
                        <ModalForm >
                        <DialogActions className={classes.dialogActions}>
                        <Button variant='contained' onClick={this.handleClickClose} className={classes.buttonClosed}>
                            Cancelar
                        </Button>
                        <Button type='submit' variant='contained' onClick={this.handleAddTask} className={classes.buttonSubmit}>
                            Adicionar
                        </Button>
                    </DialogActions>
                        </ModalForm> 
                    
                        </DialogContent>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(DialogForm) ;