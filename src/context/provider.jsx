import React, { Component } from "react";
import MyContext from "./context";
import async from 'async'
import moment from "moment";
import { conectaApi, deletaTarefas, enviaTarefas, updateTarefas } from "../api/apis";
import _ from "lodash";

class MyProvider extends Component {
  state = {
    tasks: [],
    title: '',
    descricao: '',
    criadaEm: '',
    criadaPor: '',
    texto: '',
    prioridade: 1,
    concluido: 0,
    errors: {},
    ativaAlert: false,
    conteudoDoAlert: ''
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
      errors: {
        ...this.state.errors, [name]: ''
      }
    });
  };

  validarForm = () => {
    const { title, descricao, criadaPor, prioridade } = this.state;
    const errors = {};
    if (!title) errors.title = 'Título da tarefa é obrigatório';
    if (!descricao) errors.descricao = 'Descrição é obrigatória';
    if (!criadaPor) errors.criadaPor = 'campo obrigatório';
    if (!prioridade) errors.prioridade = 'Prioridade é obrigatória';
    return errors;
  }

  addTask = () => {
    moment.locale('pt-BR');
    const { title, descricao, criadaPor, texto, prioridade, concluido } = this.state;
    const newTask = { title, subtitle: descricao, criado_em: moment().format('YYYY-MM-DD HH:mm:ss'), criado_por: criadaPor, texto, prioridade: Number(prioridade), concluido };

    const errors = this.validarForm();
    const errosNoForm = Object.keys(errors).length > 0;
    if (errosNoForm) {
      this.setState({ errors });
      return;
    }
    async.waterfall([
      (callback) => {
        enviaTarefas(newTask, callback)
      }
    ], (err, response) => {
      if (err) return console.log(err);
      console.log(response);
      this.setState({ ativaAlert: true, conteudoDoAlert: response });
      this.fetchTask()
    }

    )
    this.setState({ ativaAlert: false });

    this.setState({
      title: '',
      descricao: '',
      criadaEm: '',
      criadaPor: '',
      texto: '',
      prioridade: '',

    });
    console.log(newTask)
  }


  removeTask = (id) => {
    const { tasks } = this.state;

    const tasksRemoved = _.filter(tasks, (task) => {
      return task.id !== id;
    });

    async.waterfall([
      (callback) => {
        deletaTarefas(id, callback)
      }
    ],  (err, response) => {
      if (err) return err
      this.setState({ ativaAlert: true, conteudoDoAlert: response })
      console.log(response)
    }
  
  );
    this.setState({ tasks: [...tasksRemoved] });
    this.setState({ ativaAlert: false })
  }

  fetchTask = () => {
    async.waterfall([
      conectaApi
    ], (err, response) => {
      if (err) return console.log(err)

      this.setState({ tasks: [...response] })
    }

    )
  }

  updateTask = (id, task) => {
    const { concluido } = task;
    const updateData = { concluido: Number(concluido) };
    async.waterfall([
        (callback) => {
          updateTarefas(Number(id), updateData, callback)
        }
      ], (err, response) => {
        if (err) return console.log(err)
        

        this.fetchTask()
      }
        
    )
    
      
  }

  render() {

    return (
      <MyContext.Provider value={{
        state: this.state,
        tasks: this.state.tasks,
        validarForm: this.validarForm,
        fetchTask: this.fetchTask,
        addTask: this.addTask,
        removeTask: this.removeTask,
        updateTask: this.updateTask,
        handleChange: this.handleChange
      }}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;