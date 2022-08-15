// function filterMeteoriteData (input, meteoriteDataSet) {
//   console.log("input in helper: ", input);
//   const filteredData = meteoriteDataSet.filter(data => input.toLowerCase().includes(data.name.toLowerCase()));
//   console.log("filteredData helper: ", filteredData);
//   return filteredData;
// }
function formatDate(data) {
  //convert to just a single day name
  let dtFormat = new Intl.DateTimeFormat('en-US', {
    year: 'numeric'
  });
  const date = new Date(data);
  return dtFormat.format(date);
}
// const filteredMeteoriteData = res.data.filter(data => {
//   return props.inputName.toLowerCase() === data.name.toLowerCase();
// });

module.exports = {formatDate};