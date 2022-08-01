import {React, useEffect, useState} from 'react';
import axios from 'axios';
// import {filterMeteoriteData} from './helpers';
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
    console.log(meteoriteInfo);
    const filteresMeteorite = meteoriteInfo.filter(meteor => input.toLowerCase().includes(meteor.name.toLowerCase()));
    // console.log(filteresMeteorite);
    // console.log(filterMeteoriteData(input, meteoriteInfo));
    // filterMeteoriteData(input, meteoriteInfo);
    return filteresMeteorite;
  }

  const inputValue = (search) => {
      setInputData(search);
      setFilteredData(chosenMeteor(search));

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
      {/* <form noValidate autoComplete='off' style={{margin: ""}} onSubmit={(e) => {
        e.preventDefault();
        setInputData({meteoriteName: e.target[0].value});
      }}> */}
      {/* <form onSubmit={e => {
        e.preventDefault();
        // console.log('chosen Meteor', meteoriteInfo);
        // console.log("chosen meteor", chosenMeteor);
      }}> */}
        <input
            value={inputData}
            onChange={(e) => inputValue(e.target.value)}
            type="text"
            placeholder="Enter Meteorite Name"
          />
          {/* <input type="submit" /> */}
      {/* </form> */}
        {/* <input type='submit' onChange={(e) => setInputData(e.target.value)}/> */}
        {/* <button type="submit" onClick={() => inputData.meteoriteName}/> */}
        {/* <Button type="submit" variant='outlined'color='secondary' inputVal ={inputData}>Find</Button> */}
      {/* </form> */}
      <table>
        <thead>
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
            return(
              <tr key={index}>
                <td>{meteorite.name}</td>
                <td>{meteorite.id}</td>
                <td>{meteorite.nametype}</td>
                <td>{meteorite.recclass}</td>
                <td>{meteorite.mass}</td>
                <td>{meteorite.fall}</td>
                <td>{meteorite.year}</td>
                <td>{meteorite.geolocation.latitude}</td>
                <td>{meteorite.geolocation.longitude}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
};