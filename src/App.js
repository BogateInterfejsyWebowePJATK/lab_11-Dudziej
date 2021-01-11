import './App.css';

function App() {
 const array = [];
 for(let i=0; i<11; i++){
    array.push(<li>{Math.floor(Math.random() * 100)}</li>)
  }
  return(<ul>{array}</ul>)
}
export default App;
