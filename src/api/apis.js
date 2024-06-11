import Axios from "axios"
const url = 'https://todo-api-ochre.vercel.app/'
export const conectaApi = (callback)=>{
    Axios.get(url)
    .then((response)=>callback(null,response.data))
    .catch((error)=> callback(error,null));
}

export const enviaTarefas = (newTask,callback)=>{
    Axios.post(url ,newTask)
    .then((response)=>callback(null,response.data))
    .catch((error)=>callback(error,null))
}


export const deletaTarefas = (id,callback)=>{
    Axios.delete(`https://todo-api-ochre.vercel.app/${id}`)
    .then((response)=>callback(null,response.data))
    .catch((error)=>callback(error,null))
}

export const updateTarefas = (id,updateTask,callback)=>{
    Axios.put(`https://todo-api-ochre.vercel.app/${id}`,updateTask)
    .then((response)=>callback(null,response.data))
    .catch((error)=>callback(error,null))
}