import './App.css';
import imgJSON from './data.json';
import StockPhoto from './components/StockPhoto';
import { useState } from 'react';
import { randomArray } from './util';

function App() {
  const [photos, setPhotos] = useState(imgJSON.map(i => {
    return {
      ...i,
      date: new Date(i.date)
    }
  }));

  return (
    <div className="App">

      <button onClick={
        () => {
          photos.sort((a, b) => b.date - a.date);
          setPhotos([...photos]);
        }
      }>Sortuj od najnowszego</button>

      <button onClick={
        () => {
          photos.sort((a, b) => a.date - b.date);
          setPhotos([...photos]);
        }
      }>Sortuj od najstarszego</button>

      <button onClick={
        () => {
          photos.sort((a, b) => a.title.localeCompare(b.title));
          setPhotos([...photos]);
        }
      }>Sortuj alfabetycznie</button>

      <button onClick={
        () => {
          setPhotos(randomArray(photos));
        }
      }>Przemieszaj</button>

      <div class="Photos">
        {photos.map((i, j) => <StockPhoto key={j} {...i} />)}
      </div>
    </div >
  );
}

export default App;