import { FormControl, FormControlLabel, FormHelperText, Radio, RadioGroup, TextField, withStyles } from "@material-ui/core";

import React, { Component } from "react";
import MyContext from "../../context/context";
import { styles } from "./stylesForm";





class ModalForm extends Component {
    static contextType = MyContext;

   
    render() {
        const { handleChange, state } = this.context;
        const { errors } = state;

        const { classes,children, error } = this.props
        return (
            <form className={classes.containerForm}>

                <TextField
                    id="outlined-title"
                    label="Tarefa"
                    className={classes.textField}
                    margin="normal"
                    name="title"
                    variant="outlined"
                    onChange={handleChange}
                    required
                    value={state.title}
                    error={!!errors.title}
                    helperText={errors.title}
                    
                />
                <TextField
                    id="outlined-description"
                    label="Descrição da tarefa"
                    className={classes.textField}
                    margin="normal"
                    name="descricao"
                    variant="outlined"
                    onChange={handleChange}
                    required
                    value={state.descricao}
                    error={!!errors.descricao}
                    helperText={errors.descricao}
                    
                />

                <TextField
                    id="outlined-name"
                    label="Seu nome"
                    name="criadaPor"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    onChange={handleChange}
                    required
                    value={state.criadaPor}
                    error={!!errors.criadaPor}
                    helperText={errors.criadaPor}

                />
                <TextField
                    id="outlined-name"
                    label="Detalhes..."
                    multiline
                    name="texto"
                    rows="2"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    onChange={handleChange}
                    value={state.texto}

                />


                <FormControl component="fieldset" className={classes.formControl} error={!!errors.prioridade} required>
                    <hr style={{ width: '100%' }} />
                    <label className={classes.label}>Prioridade</label>
                    <RadioGroup 
                        aria-label="Prioridade"
                        name="prioridade"
                        className={classes.group}
                        onChange={handleChange}
                        value={state.prioridade}
                    >
                        <FormControlLabel value="1" control={<Radio required color="default" />} label="Tarefa Normal" />
                        <FormControlLabel value="2" control={<Radio required color="primary" />} label="Urgente" />
                        <FormControlLabel value="3" control={<Radio required color="secondary" />} label="Imediato" />
                    </RadioGroup>
                    {!!errors.prioridade && <FormHelperText error>{errors.prioridade}</FormHelperText>}
                </FormControl>

                {children}
            </form>
        );
    }
}


export default withStyles(styles)(ModalForm);