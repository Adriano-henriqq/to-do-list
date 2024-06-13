import { Button, Typography } from "@material-ui/core";
import { PlayArrow, Restore, StopSharp } from "@material-ui/icons";
import withStyles from "@material-ui/styles/withStyles";
import React, { Component } from "react";
import  { ContextTimer } from "../../context/providerTimer";

const styles = (theme) => ({
    root: {
        display: 'flex',
        padding: '10px',
        flexDirection: 'column',
        alignItems: 'center',
        height: 'auto',
        gap: '10px',
        marginTop: '30px'

    },
    containerButtons:{
        display: 'flex',
        gap: '10px',
        marginTop: '10px',
    },
    containerTimer:{
       
        width: '300px',
        height: '300px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 'auto'
    },
    timer: {
        fontSize: '2rem',
        margin: '10px 0 10px 0',
       
    }
})

class Timer extends Component {
    static contextType = ContextTimer;

    
    formataTempo = (segundos) => {
        const minutos = Math.floor(segundos / 60);
        const secs = segundos % 60;
        return `${minutos} : ${secs < 10 ? '0' : ''} ${secs}`
    }
    render() {
        const { minutosEmSegundos, contador, pausarContador, resetaContador } = this.context
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <div className={classes.containerTimer}>
                <Typography variant="display2" className={classes.timer} > {this.formataTempo(minutosEmSegundos)}</Typography>
                </div>
                <div className={classes.containerButtons}>
                    <Button onClick={contador}><PlayArrow/></Button>
                    <Button onClick={pausarContador} ><StopSharp/></Button>
                    <Button onClick={resetaContador} ><Restore/></Button>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Timer);