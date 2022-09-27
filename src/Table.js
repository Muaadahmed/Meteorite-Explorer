import {formatDate} from './helpers';
import FilterRow from './FilterRow';
export default function Table(props) {
  //If I have another filter table component that filters the data and the regular table just displays
  //All meteorite and in the filter table component is executed here. The filter state is allocated in
  return (
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
        {props.meteoriteFiltered.length === 0 ? props.meteoriteTotal.map((meteorite, index) => {
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
          }) : <FilterRow filteredObj={props.meteoriteFiltered[0]}/>}
      </tbody>
    </table>
  )};