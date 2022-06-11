import {React, useState} from 'react';
import MeteoriteTable from "./MeteoriteTable";
import {TextField, Button} from '@mui/material';
export default function Input(props) {
  const [inputData, setInputData] = useState({
    meteoriteName: ""
  });
  return(
    <div>
      <form noValidate autoComplete='off' style={{margin: ""}} onSubmit={(e) => {
        e.preventDefault();
        setInputData({meteoriteName: e.target[0].value});
      }}>
        <TextField variant='outlined'color='secondary' label="Enter Meteorite Name"></TextField>
        <Button type='submit' variant="outlined" color='secondary'>Find</Button>
      </form>
      <MeteoriteTable inputName={inputData.meteoriteName}/>
    </div>
  );
};