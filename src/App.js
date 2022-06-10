import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {React, useEffect} from 'react';
// import SendIcon from '@mui/icons-material/Send';
import {TextField, Button} from '@mui/material';
// import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';

//fetch meteorite landing data
//somehow filter data based on input; use a helper method
//maybe transfer data to a child component
//render data in table format.
function App() {
  useEffect(() => {
    axios.get('https://data.nasa.gov/resource/gh4g-9sfh.json')
    .then((res) => console.log("res: ", res))
  });
  return (
    <div className="App">
      <form noValidate autoComplete='off' style={{margin: ""}}>
        <TextField variant='outlined'color='secondary' label="Enter Meteorite Name"></TextField>
        <Button variant="outlined" color='secondary'>Find</Button>
      </form>
    </div>
  );
}

export default App;
