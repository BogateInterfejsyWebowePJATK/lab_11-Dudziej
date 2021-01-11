import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function App() {
 const array = [];
 for(let i=0; i<11; i++){
    array.push(<li>{Math.floor(Math.random() * 100)}</li>)
  }

  const refreshPage = ()=>{
     window.location.reload();
  }
  return(<div>
        <ul>{array}</ul>
        <button onClick={refreshPage}>Refresh</button>
        </div>);
    
}
export default App;
