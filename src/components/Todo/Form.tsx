import React,{useState, ChangeEvent} from 'react'

interface FormProps {
    onSubmit:(newTodo:string)=> void
}


const Form:React.FC<FormProps> = ({onSubmit}) => {
    const [newTodo,setNewTodo]= useState<string>('')

    const handleChange=async(e:ChangeEvent<HTMLInputElement>)=>{
        setNewTodo(e.target.value)
    }

    const handleAddTodo = async()=>{
        try 
         { 
            if(newTodo !== ''){
                onSubmit(newTodo)
                setNewTodo('')
            }
         } 
         catch(error) 
         { 
         console.error('',error) 
         }
    }
  return (
    <div>
        <input type="text" value = {newTodo} onChange={handleChange} />
        <button onClick ={handleAddTodo}>Add New Todo</button>

    </div>
  )
}

export default Form