import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {React, useEffect, useState} from 'react';
// import SendIcon from '@mui/icons-material/Send';
import Input from './Input';
// import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';

//fetch meteorite landing data
//somehow filter data based on input; use a helper method
//maybe transfer data to a child component
//render data in table format.
function App() {
  const [meteoriteInfo, setMeteoriteInfo] = useState([]);
  useEffect(() => {
    axios.get('https://data.nasa.gov/resource/gh4g-9sfh.json')
    .then((res) => {
      setMeteoriteInfo(res.data);
    })
    .catch((err) => {
      setMeteoriteInfo([]);
      console.log("API resquest failed: ", err.response.status)
    })
  }, []);
  return (
    <div className="App">
      <Input meteoriteSet={meteoriteInfo}/>
    </div>
  );
}

export default App;
