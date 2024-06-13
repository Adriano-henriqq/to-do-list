import { Checkbox, Grid, Paper, Typography } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import { CalendarToday } from "@material-ui/icons";
import DeleteIcon from '@material-ui/icons/Delete';
import moment from "moment/";
import React, { Component } from "react";
import MyContext from "../../context/context";
import DeleteTaskDialog from "../dialog/confirmationDialog";

const styles = (theme) => ({
    containerTask: {
        backgroundColor: '#fdfdfd',
        marginTop: '1rem',
        padding: '5px 15px 15px 5px'
    },
    taskConcluida: {
        backgroundColor: '#47d147',
    },


    taskHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 10px 5px 0'
    },
    taskTitle: {
        fontSize: '18px',
        fontWeight: '700'
    },

    taskMain: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        flexWrap: 'wrap',
        padding: '10px'
    },

    taskSubtitle: {
        color: 'grey'
    },
    taskFooter: {
        display: 'flex',
        alignItems: 'center',
        gap: '30px',
        justifyContent: 'space-between',
        marginTop: '10px',
        padding: '10px',

    },
    itemFooter: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
    },
})



class Task extends Component {
    static contextType = MyContext;
    state = {
        concluido: 0,
        dialogOpen: false,
        check: false

    }

    handleCheckboxChange = (event, id) => {
        const { updateTask } = this.context;
        const concluido = event.target.checked ? 1 : 0;
        this.setState({ concluido: Number(concluido) }, () => {
            updateTask(Number(parseInt(id)), {concluido: this.state.concluido});
        });
    }
    
    handleDelete = () => {
        this.setState({ dialogOpen: true })
    };

    handleCloseDialog = (confirm) => {
        if (confirm) {
            const { id } = this.props;
            const { removeTask } = this.context

            removeTask(id);
        }
        this.setState({ dialogOpen: false });
    };

    render() {
        const { dialogOpen } = this.state
        const { classes, title, subtitle, texto, criadaEm, criadaPor, prioridade, id, concluido } = this.props
        return (
            <Grid xs={12} lg={5} md={6} item>
                <Paper className={`${classes.containerTask} ${concluido ? classes.taskConcluida : ''}`} >
                    <div className={classes.taskHeader}>
                        <Checkbox onChange={(event) => this.handleCheckboxChange(event, id)} checked={concluido === 1} color="default" />
                        <Typography className={classes.taskTitle} variant="title">{title}</Typography>
                    </div>

                    <div className={classes.taskMain}>
                        <Typography className={classes.taskSubtitle} variant="subtitle1">{subtitle}</Typography>
                        <Typography variant="body2">{texto}</Typography>
                        <Typography variant="body2"><strong>Criada Por:</strong> {criadaPor} </Typography>
                        <Typography><strong>Prioridade:</strong> {prioridade === 2 ? 'Urgente' : prioridade === 3 ? 'Imediato' : 'Normal'}</Typography>
                    </div>
                    <hr />
                    <div className={classes.taskFooter}>
                        <Typography className={classes.itemFooter} variant="body2"><CalendarToday /> Criada em: {moment(criadaEm).format('DD/MM/YYYY HH:mm:ss')}</Typography>
                        <DeleteIcon onClick={this.handleDelete} color="error" cursor={'pointer'} />
                    </div>
                </Paper>
                <DeleteTaskDialog open={dialogOpen} onClose={this.handleCloseDialog} />
            </Grid>
        );
    }
}

export default withStyles(styles)(Task);