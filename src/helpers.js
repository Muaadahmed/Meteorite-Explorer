function filterMeteoriteData (input, meteoriteDataSet) {
  console.log("input in helper: ", input);
  const filteredData = meteoriteDataSet.filter(data => input.toLowerCase().includes(data.name.toLowerCase()));
  console.log("filteredData helper: ", filteredData);
  return filteredData;
}
// const filteredMeteoriteData = res.data.filter(data => {
//   return props.inputName.toLowerCase() === data.name.toLowerCase();
// });

module.exports = {filterMeteoriteData};