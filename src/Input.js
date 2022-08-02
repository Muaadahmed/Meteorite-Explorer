import {React, useEffect, useState} from 'react';
import axios from 'axios';
import {formatDate} from './helpers';
// import Button from './Button';
export default function Input(props) {
  const [inputData, setInputData] = useState("");
  // console.log('input: ', inputData)
  const [meteoriteInfo, setMeteoriteInfo] = useState([]);
  const [filterData, setFilteredData] = useState([]);
  // )filterMeteoriteData(inputData, res.data))
  // const chosenMeteor = () => {
  const chosenMeteor = (input) => {
    // setFilteredData(filterMeteoriteData(input, meteoriteInfo));
    const filteresMeteorite = meteoriteInfo.filter(meteor => input.toLowerCase().includes(meteor.name.toLowerCase()));
    // console.log(filteresMeteorite);
    // console.log(filterMeteoriteData(input, meteoriteInfo));
    // filterMeteoriteData(input, meteoriteInfo);
    return filteresMeteorite;
  }

  console.log(meteoriteInfo);
  const inputValue = (search) => {
    //Display all meteorite Data when search is empty
    if (search !== ""){
      setInputData(search);
      setFilteredData(chosenMeteor(search));
    } else {
      setInputData("");
      setFilteredData(meteoriteInfo);
    }

    // console.log("search input: ", search);
  }
  useEffect(() => {
    axios.get('https://data.nasa.gov/resource/gh4g-9sfh.json')
    .then((res) => setMeteoriteInfo(res.data))
      // console.log("inputData: ", inputData);
      // console.log("log filtered data: ", filterMeteoriteData(inputData, res.data));
      // setMeteoriteInfo(res.data.filter(data => inputData.toLowerCase() === data.name.toLowerCase()))})
    .catch((err) => console.log(err.response.status));
  }, []);
  // };
  // console.log('chosen Meteor', meteoriteInfo);
  // useEffect(chosenMeteor,[]);
  return(
    <div>
        <input style={{margin: 'auto'}}
            value={inputData}
            onChange={(e) => inputValue(e.target.value)}
            type="text"
            placeholder="Enter Meteorite Name"
          />
      <table>
        <thead style={{margin: '50px 20px 50px 20px', textAlign: "left"}}>
          <tr>
            <th>name</th>
            <th>id</th>
            <th>nameType</th>
            <th>recClass</th>
            <th>mass</th>
            <th>fall</th>
            <th>year</th>
            <th>latitude</th>
            <th>longitude</th>
          </tr>
        </thead>
        <tbody style={{marginTop: '20px'}}>
          {filterData.map((meteorite, index) => {
            console.log(meteorite);
            return(
              <tr key={index}>
                <td>{meteorite.name}</td>
                <td>{meteorite.id}</td>
                <td>{meteorite.nametype}</td>
                <td>{meteorite.recclass}</td>
                <td>{meteorite.mass}</td>
                <td>{meteorite.fall}</td>
                <td style={{paddingRight: '20px'}}>{!meteorite.year ? "N/A" : formatDate(meteorite.year)}</td>
                <td style={{paddingRight: '20px'}}>{!meteorite.geolocation ? "N/A" : meteorite.geolocation.latitude}</td>
                <td style={{marginTop: '20px'}}>{!meteorite.geolocation ? "N/A" : meteorite.geolocation.longitude}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
};