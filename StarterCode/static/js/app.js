// Reference for data from data.js

var selectedData = data;
var tableData = data;
// var selectedData = data;
// Get a reference to the table body
var tbody = d3.select("tbody");

// Loop through `data` and console.log each sighting
console.log(data);

//Function to display selected data in table
function fillTable(selectedData) {
// Reference data
// Get a reference to the table body
// Loop through data
// Use d3 to append one table row `tr` for each UFO sighting and insert data
  selectedData.forEach((ufoSighting) => {
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text();
          cell.text(value);
        });
  });
};  

// fillTable(selectedData);

// Select button
var button = d3.select("#filter-btn");

// Select form
var form = d3.select("#form");

// Create event handler for button
button.on("click", runEnter);
//form.on("submit",runEnter);

// Complete event handler function for form
function runEnter() {
    // Prevent the page from refreshing
    d3.event.preventDefault();    
    // Select the input element and get the requested date
    var dateInput = d3.select("#datetime-input").property ("value"); 
    var cityInput = d3.select("#city-input").property ("value");     
    // var tbody = d3.select("tbody");
    // Filter data by date
    //var selectedData = tableData.filter(tableData => tableData.datetime === dateInput);
    var selectedData = tableData.filter(tableData => tableData.city === cityInput);

    // users = users.filter(obj => obj.name == filter.name && obj.address == filter.address)
    fillTable(selectedData);

    // Output file of filtered data
  
    console.log(selectedData);
};
