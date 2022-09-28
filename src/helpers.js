function formatDate(data) {
  //convert to just a single day name
  let dtFormat = new Intl.DateTimeFormat('en-US', {
    year: 'numeric'
  });
  const date = new Date(data);
  return dtFormat.format(date);
}

module.exports = {formatDate};