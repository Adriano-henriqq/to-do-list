import { Dialog, DialogContent, Icon, IconButton } from "@material-ui/core";
import { Alarm } from "@material-ui/icons";
import React, { Component } from "react";
import TabsBar from "../Tabs";
import withStyles from "@material-ui/styles/withStyles";
import { ContextTimer } from "../../context/providerTimer";

const styles = (theme) =>({
    root: {
        margin: '0 100px 0 0',
    }
    
})

class DialogTime extends Component {
    static contextType = ContextTimer;
    
    state = {
        open: false,
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    }

    handleClickClose = () => {
        this.setState({ open: false });
    }
    render() {
        const { open } = this.state
        const {classes} = this.props
        const {timerAtivo} = this.context
        return (
            <div className={classes.root} >
                <IconButton   onClick={this.handleClickOpen} color={timerAtivo ? 'primary': 'default'} aria-label="Botao de alarme">
                    <Icon><Alarm/></Icon>
                </IconButton>
                <Dialog
                    
                    fullWidth={'xl'}
                    open={open}
                    onClose={this.handleClickClose}
                >
                    <DialogContent >
                        <TabsBar />

                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles) (DialogTime);