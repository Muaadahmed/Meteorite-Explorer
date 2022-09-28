import {formatDate} from './helpers';
export default function FilterRow(props) {
  console.log('filtered obj: ', props.filteredObj);
  if (props.filteredObj === undefined) {
    return;
  }
  return(
    <tr>
      <td>{props.filteredObj.name}</td>
      <td>{props.filteredObj.id}</td>
      <td>{props.filteredObj.nametype}</td>
      <td>{props.filteredObj.recclass}</td>
      <td>{props.filteredObj.mass}</td>
      <td>{props.filteredObj.fall}</td>
      <td style={{paddingRight: '20px'}}>{!props.filteredObj.year ? "N/A" : formatDate(props.filteredObj.year)}</td>
      <td style={{paddingRight: '20px'}}>{!props.filteredObj.geolocation ? "N/A" : props.filteredObj.geolocation.latitude}</td>
      <td style={{marginTop: '20px'}}>{!props.filteredObj.geolocation ? "N/A" : props.filteredObj.geolocation.longitude}</td>
    </tr>
  );
}