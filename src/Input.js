import {React, useState, useRef} from 'react';
import Table from './Table';

export default function Input(props) {
  const inputValue = useRef();
  const [btnClicked, setBtnClicked] = useState(false);
  const [filterData, setFilteredData] = useState([]);

  function chosenMeteor(input) {
    setBtnClicked(true);
    const filteresMeteorite = props.meteoriteSet.filter(meteor => input.current.value.toLowerCase().includes(meteor.name.toLowerCase()));
    setFilteredData(filteresMeteorite);
    return filteresMeteorite;
  };

  return(
    <div style={{display: 'flex', flexDirection: 'column', padding: '50px', margin: '30px'}}>
      <div className='inputBtn'>
        <input style={{margin: 'auto', zIndex: 1}}
            ref={inputValue}
            type="text"
            placeholder="Enter Meteorite Name"
        />
        <button onClick={() => chosenMeteor(inputValue)}>Search Meteor</button>
      </div>
      {props.meteoriteSet.length === 0 && 
        <div style={{textAlign: 'center', zIndex: 1}}>
          <h1 style={{color: 'lightgrey'}}>API resquest failed</h1>
        </div>
      }
      <div style={{textAlign: 'center', zIndex: 1}}>
        {filterData.length === 0 && props.meteoriteSet.length === 0 ? "" 
          : filterData.length === 0 && btnClicked === true? <div><h1 style={{color: 'lightgrey'}}>Meteor Does not Exist</h1> </div>
            : ""}
      </div>
      <Table meteoriteTotal={props.meteoriteSet} meteoriteFiltered={filterData} btnClickEvent={btnClicked} />
    </div>
  );
};