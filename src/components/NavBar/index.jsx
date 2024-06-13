import { AppBar, Toolbar } from "@material-ui/core";
import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import DialogTime from "../DialogTime";
const styles = (theme) => ({
    appBar: {
        position: "relative",
        color: 'default',
    },
    toolBar: {
        display: 'flex',
        justifyContent: 'flex-end'
    }

})

class NavBar extends Component {
    state = {}
    render() {
        const { classes } = this.props;
        return (
            <div>
                <AppBar color="inherit" className={classes.appBar}  >
                    <Toolbar className={classes.toolBar} >

                        <div>
                            <DialogTime />
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(styles)(NavBar);