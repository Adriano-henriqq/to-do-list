import { Grid,  Typography } from "@material-ui/core";
import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import Task from "../task";
import DialogForm from "../dialog";
import MyContext from "../../context/context";
import SnackBar from "../SnackBar";
import { styles } from "./styleTaskList";
import _ from "lodash";




class TaksList extends Component {
    static contextType = MyContext;

    state = {}
    componentDidMount(){
        const {fetchTask} = this.context;
        fetchTask()
    }

    render() {
        const { tasks, state} = this.context;
        const { classes } = this.props
        return (
            <div className={classes.container}>
                <div>
                    <Typography className={classes.title} variant="h1">
                        To-do App
                    </Typography>
                </div>
                <hr className={classes.lineTops} />
                <div className={classes.containerButtons}>
                   
                    <DialogForm />
                </div>
                {/*tarefa*/}
                    <Grid className={classes.taskList} container spacing={24} >
                      {_.map(tasks,(task)=> (
                        <Task key={task.id} 
                         title={task.title} 
                         subtitle={task.subtitle} 
                         texto={task.texto} 
                         criadaEm={task.criado_em} 
                         criadaPor={task.criado_por} 
                         prioridade={task.prioridade}
                         concluido={task.concluido}
                         id={task.id}
                         
                         />
                        
                        ))}
                    
                </Grid>

             <SnackBar resposta={state.ativaAlert} conteudo={state.conteudoDoAlert} />           
            </div>
        );
    }
}

export default withStyles(styles)(TaksList);