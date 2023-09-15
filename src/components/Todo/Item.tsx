import React from 'react'

interface ItemProps{
    item:Todo,
    ondelete:(id:string)=> void,
    update:(id:string)=> void,
}

const getStrikeStyle =(isCompleted:boolean)=>(
    // textDecoration:isCompleted ? 'line-through':''
    { textDecoration: isCompleted ? 'line-through' : 'none', color: isCompleted ? 'purple' : 'initial' }
)

const Item:React.FC<ItemProps> = ({item, ondelete, update}) => {

    const strike=getStrikeStyle(item.isCompleted)
  return (
    <div>
        <h2 onClick={update.bind(this,item._id)} style ={strike}>{item.name}</h2>
        <button onClick = {ondelete.bind(this,item._id)}>Delete</button>
    </div>
  )
}

export default Item