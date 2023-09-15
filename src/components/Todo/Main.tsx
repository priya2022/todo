import React,{useEffect, useState} from 'react'
import Form from './Form'
import List from './List'
import { API_URL } from './API_URL'
import axios from 'axios'

type Todo={
    _id:string,
    name:string,
    isCompleted:boolean
}
const Main:React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([])

    useEffect(() => {
    getTodos()
    }, [])

    let todoLength =0;

    const getTodos =async()=>{
        try 
         { 
            const response = await axios.get<Todo[]>(`${API_URL}/todos`)
            setTodos(response.data)
         } 
         catch(error) 
         { 
         console.error('Error Fetching Data',error) 
         }
    }

    const handleAddTodo =async(newTodo:string)=>{
        try 
         { 
            todoLength++
            const newId = todoLength;
            const updateAdd ={id:newId, name:newTodo, isCompleted:false}
            const response = await axios.post(`${API_URL}/newTodo`,updateAdd)
            setTodos(response.data)
            getTodos();
         } 
         catch(error) 
         { 
         console.error('Error Adding new Todo',error) 
         }
    }

    const handleUpdate =async(id:string)=>{
        try 
         { 
         const updateFind = todos.find(item=> item._id ===id)
         const updateComplete = !updateFind?.isCompleted
         const updateTodos = todos.map(item=>{
            if(item._id === id){
                return {...item, isCompleted:updateComplete}
            }
            return item;
         })
         setTodos(updateTodos)

         await axios.put(`${API_URL}/update/${id}`, {isCompleted:updateComplete})
         } 
         catch(error) 
         { 
         console.error('',error) 
         }

    }
    const handleDelete =async(id:string)=>{
        try 
         { 
          await axios.delete(`${API_URL}/delete/${id}`)
          setTodos(prev=> prev.filter(item=> item._id !==id))
         } 
         catch(error) 
         { 
         console.error('ERror Deleting Data',error) 
         }
    }
    return (
        <div>
            <Form onSubmit ={handleAddTodo} />
            <List todos ={todos} onUpdate ={handleUpdate} onDelete={handleDelete} />
        </div>
    )
}

export default Main
