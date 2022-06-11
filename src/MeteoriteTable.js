import {React, useEffect, useState} from 'react';
import {filterMeteoriteData} from './helpers';
import axios from 'axios';
import MeteoriteInfoRow from './MeteoriteInfoRow';
export default function MeteoriteTable(props) {
  // take the inputname and filter it out through the api call and you should be left with
  // a table containing names 
  console.log("HELLO: ", props.inputName);
  const [meteoriteInfo, setMeteoriteInfo] = useState([]);
  useEffect(() => {
    axios.get('https://data.nasa.gov/resource/gh4g-9sfh.json')
    .then((res) => {
      setMeteoriteInfo(filterMeteoriteData(props.inputName, res.data));
      console.log("first Meteorite data: ", meteoriteInfo);
    })
  }, []);
  return (
    <div>
      <MeteoriteInfoRow {...meteoriteInfo}/>
    </div>
  );
}