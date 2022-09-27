import {React, useState, useRef} from 'react';
import Table from './Table';
// import {debounce} from 'lodash';
// const _ = require('lodash');
// import Button from './Button';
export default function Input(props) {
  // const [inputData, setInputData] = useState("");
  const inputValue = useRef();
  // console.log('input: ', inputData)
  const [filterData, setFilteredData] = useState([]);
  // )filterMeteoriteData(inputData, res.data))
  // const chosenMeteor = () => {
  function chosenMeteor(input) {
    console.log("input filtering...", input.current.value)
    // setFilteredData(filterMeteoriteData(input, props.meteoriteSet));
    const filteresMeteorite = props.meteoriteSet.filter(meteor => input.current.value.toLowerCase().includes(meteor.name.toLowerCase()));
    console.log(filteresMeteorite);
    setFilteredData(filteresMeteorite);
    // console.log(filterMeteoriteData(input, props.meteoriteSet));
    // filterMeteoriteData(input, props.meteoriteSet);
    return filteresMeteorite;
  };
  //try creating an input with a search panel instead.
  //when we enter a search term and then submit, the useeffect will be triggered and the search term will identify it in the list of meteorites.

  // console.log(props.meteoriteSet);
  //separate the input and input value
  // function debounce(func, timeout=100) {
  //   console.log("hi");
  //   let timer;
  //   return (...args) => {
  //     console.log("in return of debounce func");
  //     clearTimeout(timer);
  //     timer = setTimeout(() => {func.apply(this, args); }, timeout);
  //     // console.log(func());
  //   };
  // } 
  // const debounce = (timeout=1000) => {
    
  // };

  // const inputValue = (search) => {
  //   console.log('HI');
  //   console.log("search term: ", search);
  //   //Display all meteorite Data when search is empty
  //   setInputData(search);
  //   // if (search !== ""){
  //   //   setFilteredData(chosenMeteor(search));
  //   // } else {
  //   //   setFilteredData(props.meteoriteSet);
  //   // }
  //   // console.log("search input: ", search);
  // };

  // const processChange = (inp) => debounce(() => inputValue(inp))();
  // };
  // console.log('chosen Meteor', props.meteoriteSet);
  // useEffect(chosenMeteor,[]);
  //display search results as user is typing
  // set the input first then take the input and with the click of a button do a search
  return(
    // useEffect should happen initially
    //place inputValue on an onClick function of a button, execute the function with the input value
    // when the button is clicked. The function should trigger a useEffect
    <div style={{display: 'flex', flexDirection: 'column', padding: '50px', margin: '30px'}}>
      <div>
        <input style={{margin: 'auto'}}
            ref={inputValue}
            type="text"
            placeholder="Enter Meteorite Name"
        />
        <button onClick={() => chosenMeteor(inputValue)}>Search Meteor</button>
      </div>
      {props.meteoriteSet.length === 0 && 
        <div style={{textAlign: 'center'}}>
          <h1 style={{color: 'lightgrey'}}>API resquest failed</h1>
        </div>
      }
      <Table meteoriteTotal={props.meteoriteSet} meteoriteFiltered={filterData}/>
          {/* // }): filterData.map((meteorite, index) => {
          //   return(
          //     <tr key={index}>
          //       <td>{meteorite.name}</td>
          //       <td>{meteorite.id}</td>
          //       <td>{meteorite.nametype}</td>
          //       <td>{meteorite.recclass}</td>
          //       <td>{meteorite.mass}</td>
          //       <td>{meteorite.fall}</td>
          //       <td style={{paddingRight: '20px'}}>{!meteorite.year ? "N/A" : formatDate(meteorite.year)}</td>
          //       <td style={{paddingRight: '20px'}}>{!meteorite.geolocation ? "N/A" : meteorite.geolocation.latitude}</td>
          //       <td style={{marginTop: '20px'}}>{!meteorite.geolocation ? "N/A" : meteorite.geolocation.longitude}</td>
          //     </tr>
          //   )
          // })} */}
      <div style={{textAlign: 'center'}}>
        {filterData.length === 0 && props.meteoriteSet.length === 0 ? "" 
          : filterData.length === 0 ? <h1 style={{color: 'lightgrey'}}>Meteor Does not Exist</h1> 
            : ""}
      </div>
    </div>
  );
};