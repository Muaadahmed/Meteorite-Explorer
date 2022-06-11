const filterMeteoriteData = (input, meteoriteDataSet) => {
  console.log("input: ", input);
  const filteredData = meteoriteDataSet.filter(data => input.toLowerCase() === data.name.toLowerCase());
  console.log("filteredData helper: ", filteredData);
  return filteredData;
}

module.exports = {filterMeteoriteData};