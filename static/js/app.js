// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// Keep track of all filters
var filters = {};

// This function will replace your handleClick function
function updateFilters() {

  // Gather All values from filters
  filters =  {
    datetime : d3.select("#datetime").property("value"),
    city : d3.select("#city").property("value"),
    state : d3.select("#state").property("value"),
    country : d3.select("#country").property("value"),
    shape : d3.select("#shape").property("value")
  };
  // Remove keys from object with no filters added
  Object.keys(filters).forEach((key) => (filters[key] == "") && delete filters[key]);

  // Call function to apply all filters and rebuild the table
  filterTable(filters);
/////////////////////////////////////////////////////
  //used for Testing remove for final copy
  
  //console.log(filters);
  //var DictonaryLength = 0
  //DictonaryLength = Object.keys(filters).length
  //console.log(DictonaryLength)
}

function filterTable() {

  // Set the filteredData to the tableData
  let filteredData = tableData;
  // Loop through all of the filters and keep any data that
  
  // matches the filter values
  let keys = Object.keys(filters)
  let values = Object.values(filters)
  let numberOfFilters = keys.length


  for (i = 0; i < numberOfFilters; i++){    
    let filterOn = keys[i];
    let filterValue = values[i];
    
    if (filterOn === 'datetime') {filteredData = filteredData.filter(row => row.datetime === filterValue)};
    if (filterOn === 'city') {filteredData = filteredData.filter(row => row.city === filterValue)};
    if (filterOn === 'state') {filteredData = filteredData.filter(row => row.state === filterValue)};
    if (filterOn === 'country') {filteredData = filteredData.filter(row => row.country === filterValue)};
    if (filterOn === 'shape') {filteredData = filteredData.filter(row => row.shape === filterValue)};

  };
  // rebuild the table using the filtered Data
  buildTable(filteredData);
}


// Filter Table button to update filters and start function to rebuilt table with filtered data
d3.selectAll("#filter-btn").on("click", updateFilters);

// Build the table when the page loads
buildTable(tableData);
