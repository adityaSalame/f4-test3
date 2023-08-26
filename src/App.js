import React, {useState} from 'react';
import Home from './Components/Home';
import Card from './Components/Card';
import Morebooks from './Components/Morebooks';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  
  return (
   <div>
    <Home setData={setData}/>
    <Card data={data}/>
    <h2>More Books</h2>
    <Morebooks data={data}/>
   </div>
  );
}

export default App;
