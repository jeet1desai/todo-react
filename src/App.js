import './App.css';
import React, { useState } from 'react';

const App = () => {
  const [inputList, setInputList] = useState('');
  const [item, setItem] = useState([]);

  const inputEvent = (event) => {
    setInputList(event.target.value);
  }

  const listOfItem = () => {
    if(inputList !== ''){
      setItem((oldItem) => {
        return [...oldItem, inputList];
      });
      setInputList('');
    }
  }

  const deleteItem = (id) => {
    // console.log('delete', id);
    setItem((oldItem) => {
      return oldItem.filter((arrEle, index)=>{
        return index !== id;
      })
    });
  }
  
  return (
    <>
      <div className="main-div">
        <div className="center-div">
          <br />
          <h1>TOdo</h1>
          <br />

          <input onChange={inputEvent} value={inputList} type="text" placeholder="Add a Item" required />
          <button onClick={listOfItem} className="add-todo">+</button>

          <ol>
            {item.map((itemval, index) => {
              return (
                  <li key={index} id={index}>
                    <button onClick={()=>{deleteItem(index)}} key={index} className="delete-todo">X</button> {itemval}
                  </li>
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
