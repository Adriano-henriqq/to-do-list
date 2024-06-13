import React,{ Component } from "react";
import { ContextTimer } from "../../context/providerTimer";
import { Typography } from "@material-ui/core";
import withStyles from "@material-ui/styles/withStyles";

const styles = (theme)=>({
    root:{
        display: 'flex',
        gap: '18px',
        justifyContent: 'center',
    }
})


class Historicos extends Component {
    static contextType = ContextTimer
    state = {  } 
    render() { 
        const {historico} = this.context
        const {classes} = this.props

        return (
            <div className={classes.root}> 
                    {historico.map((historico)=> (
                     <div className={classes.root} >   
                    <Typography variant="body1">Iniciado: <strong>{historico.iniciado}</strong></Typography>
                    <Typography variant="body1">Pausado: <strong>{historico.pausado}</strong></Typography>
                    </div>
                ))}
             </div>
        );
    }
}
 
export default withStyles(styles) (Historicos);