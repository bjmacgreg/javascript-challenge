// Reference for data from data.js
var tableData = data;
//var selectedData = tableData;
var dateInput = "888";
var cityInput = "888";
var stateInput = "888"; 
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
        let row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([, value]) => {
            let cell = row.append("td");
            cell.text(value);
        });
    });
}

//Display complete dataset
fillTable(tableData);

//EVENT HANDLER
button.on("click", function() {
  //declare selected data variable
  //var selectedData = data;
  //list of inputs
  //inputs = [dataInput, cityInput];
  //set inputs to "none"
  //let dateInput = "888";
  //let cityInput = "888";
  //let stateInput = "888"; 
  //let selectedData1 = tableData; 
  //let selectedData2 = tableData; 
  //let selectedData3 = tableData; 
  //collect inputs and filter data
  dateInput = d3.select("#datetime-input").property ("value");
  cityInput = d3.select("#city-input").property ("value"); 
  stateInput = d3.select("#state-input").property ("value"); 

  // console.log(dateInput);
  // if (dateInput != "888") {selectedData1 = tableData.filter(tableData => (tableData.datetime === dateInput))}
  // else {selectedData1 = tableData};
  //fillTable(selectedData);
  // console.log(selectedData1);
  
  // console.log(cityInput);
  // if (cityInput != "888") {selectedData2 = selectedData1.filter(selectedData1 => (selectedData1.city === cityInput))}
  // else {selectedData2 = selectedData1};   
  // //fillTable(selectedData); 
  // console.log(selectedData2); 

  // console.log(cityInput);
  // if (cityInput = "888") {selectedData2 = selectedData1}
  // else {selectedData2 = selectedData1.filter(selectedData1 => (selectedData1.city === cityInput))};  
  //fillTable(selectedData); 
  // console.log(selectedData2); 


  
  // console.log(stateInput);
  // if (stateInput = "888") {selectedData3 = selectedData2}
  // else {selectedData3 = selectedData2.filter(selectedData2 => (selectedData2.state === stateInput))};
  //else selectedData = selectedData;
  //else {selectedData = selectedData};  

  if (dateInput != "888") {selectedData1 = tableData.filter(tableData => (tableData.datetime === dateInput))}
  else {selectedData1 = tableData};

  if (cityInput = "888") {selectedData2 = selectedData1}
  else {selectedData2 = selectedData1.filter(selectedData1 => (selectedData1.city === cityInput))}; 

  if (stateInput = "888") {selectedData3 = selectedData2}
  else {selectedData3 = selectedData2.filter(selectedData2 => (selectedData2.state === stateInput))};

  //fillTable(selectedData1)});
  fillTable(selectedData2)});
  //fillTable(selectedData3)});