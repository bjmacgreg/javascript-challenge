// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Loop through `data` and console.log each sighting
console.log(data);

// Use d3 to append one table row `tr` for each weather report object
data.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    var row = tbody.append("tr");
  });

  // Use `Object.entries` to console.log each sighting
data.forEach(function(ufoSighting) {
console.log(ufoSighting);
var row = tbody.append("tr");
  
Object.entries(ufoSighting).forEach(function([key, value]) {
  console.log(key, value);
 });
});

// // Step 5: Use d3 to update each cell's text with
// // ufo sighting data
// data.forEach(function(ufoSighting) {
//     console.log(ufoSighting);
//     var row = tbody.append("tr");
//     Object.entries(ufoSighting).forEach(function([key, value]) {
//       console.log(key, value);
//       // Append a cell to the row for each value
//       // in the sighting object
//       var cell = row.append("td");
//       cell.text(value);
//     });
//   });
  
//   // BONUS: Refactor to use Arrow Functions!
data.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
 
  // Select the button
var button = d3.select("#button");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// // Complete the event handler function for the form
// function runEnter() {

//     // Prevent the page from refreshing
//     d3.event.preventDefault();
    
//     // Select the input element and get the raw HTML node
//     var inputElement = d3.select("#datetime-input");
  
//     // Get the value property of the input element
//     var inputValue = inputElement.property("value");
  
//     console.log(inputValue);
//     console.log(ufoSighting);
  
//     var filteredData = ufoSighting.filter(ufoSighting => ufoSighting.datetime === inputValue);
  
//     console.log(filteredData);
  
