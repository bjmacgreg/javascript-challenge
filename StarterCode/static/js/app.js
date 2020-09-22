// Reference for data from data.js
var tableData = data;
let selectedData = data;
// Reference for button
var button = d3.select("#filter-btn");
// Get a reference to the table body
var tbody = d3.select("tbody");
// Console.log each sighting
console.log(data);

//Function to display selected data in table
function fillTable(x) {
//Clear existing data
  d3.select("#ufo-table tbody").selectAll("tr").remove();  
//Add rows and fill them with data (assuming all data organized the same way)
  x.forEach((ufoSighting) => {  
  //x.forEach((ufoSighting) => {
      let row = tbody.append("tr");
      Object.entries(ufoSighting).forEach(([, value]) => {
        let cell = row.append("td");
        cell.text(value);
      });
  });
}

//Display complete dataset
fillTable(selectedData);

// Complete event handler function for form
button.on("click", function() {
  let cityInput = null;
  let dateInput = null;
  
      // Select the input element and get the requested data
  dateInput = d3.select("#datetime-input").property ("value"); 
  console.log(dateInput);
  cityInput = d3.select("#city-input").property ("value");     
  console.log(cityInput);
  if (dateInput != null && cityInput != null){selectedData = tableData.filter(tableData => tableData.datetime === dateInput && tableData.city === cityInput)}
  else if (dateInput != null){selectedData = tableData.filter(tableData => tableData.datetime === dateInput)}
  else {selectedData = tableData.filter(tableData => tableData.city === cityInput)};
  // if (dateInput != null && cityInput != null){selectedData = tableData.filter(tableData => tableData.datetime === dateInput && tableData.city === cityInput)};
  
  //let citySelection = tableData.filter(tableData => tableData.city === cityInput);

      // Output file of filtered data
  console.log(selectedData);

  //selectedData = (tableData => tableData.datetime === dateSelection && tableData.city === cityInput)
  fillTable(selectedData);   
  //fillTable(selectedData);    
  });

  //const intersection = array1.filter(element => array2.includes(element));
      // Prevent the page from refreshing
  //d3.event.preventDefault();    

//button.on("click",runEnter);
//tbody.remove;
//fillTable(selectedData);
//form.on("submit",runEnter);

// Select button


// Select form
//var form = d3.select("#form");
// Create event handler for button

  // users = users.filter(obj => obj.name == filter.name && obj.address == filter.address)

//runEnter(selectedData);

//form.on("submit",runEnter);
// let bigCities = cities.filter(city => city.population > 3000000);
// console.log(bigCities);


// // first filter
// function filterRating(hotel) {
//   return hotel.rating >= filters.rating;
// }

// // second filter
// function filterMeal(hotel) {
//   return !filters.mealType.length || hotel.mealType == filters.mealType;
// }

// // apply both filters to initial array
// function update() {
//   let filteredCards = hotels.filter(filterRating).filter(filterMeal);
// };