import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {React, useEffect} from 'react';
// import SendIcon from '@mui/icons-material/Send';
import Input from './Input';
// import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';

//fetch meteorite landing data
//somehow filter data based on input; use a helper method
//maybe transfer data to a child component
//render data in table format.
function App() {
  return (
    <div className="App">
      <Input/>
    </div>
  );
}

export default App;
