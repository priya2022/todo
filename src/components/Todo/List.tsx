import React from 'react'
import Item from './Item'


interface ListProps {
    todos:Todo[],
    onUpdate:(id:string)=> void
    onDelete:(id:string)=> void
}

const List:React.FC<ListProps> = ({todos, onUpdate, onDelete}) => {
    if (!Array.isArray(todos)) {
        // Handle the case where todos is not an array (e.g., initial loading or empty state)
        return null; // Or display a loading message, an empty state, or handle it as needed
      }
  return (
    todos.map((item,index)=>{
        return(
            <Item
            key={index}
            item={item}
            update={onUpdate}
            ondelete ={onDelete}
            />
        )
    })
  )
}

export default List