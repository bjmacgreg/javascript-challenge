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
  