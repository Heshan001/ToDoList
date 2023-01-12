import './App.css'
import React, { useState} from 'react'

function App() {

  // state hook - `usestate`
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  // helper  function

  function addItem() {

   if (!newItem) {
     alert("enter an item...!")
    return;
    }
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    };

    setItems(oldList =>[...oldList, item]);
    setNewItem("");
}

  return (
    <div className='App'>  
     <h1 className='proName'> ToDo List </h1>
     <input className='inputBox' type="text"
       placeholder="Enter Text" 
       value={newItem}
       onChange={e => setNewItem(e.target.value)}
       />

     <button className='addButton' onClick={() => addItem()}> Add </button>

     <ol>
      {items.map(item => {
        return(
          <li className='itemList' key={item.id}>{item.value}</li>
        )
      })}
     </ol>
     
    </div>
    
  )
}

export default App
