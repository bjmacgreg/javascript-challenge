// Reference for data from data.js
var tableData = data;

// Reference to button
var button = d3.select("#filter-btn");

// Reference to table body
var tbody = d3.select("tbody");

// Console.log each sighting
console.log(data);

// Collect and inspect unique values of variables
// Thanks https://codepen.io/vlad-bezden/pen/OMEXJz?editors=0012
var uniqueDates = [...new Set(data.map(item => item.datetime))];
console.log(uniqueDates);
var uniqueCities = [...new Set(data.map(item => item.city))];
console.log(uniqueCities);
var uniqueStates = [...new Set(data.map(item => item.state))];
console.log(uniqueStates);
var uniqueCountries = [...new Set(data.map(item => item.country))];
console.log(uniqueCountries);
var uniqueShapes = [...new Set(data.map(item => item.shape))];
console.log(uniqueShapes);
var uniqueDurations = [...new Set(data.map(item => item.durationMinutes))];
console.log(uniqueDurations);
// Duration formats are too inconsistent to clean up just now, recommend improved data collection...)

// // Set up options for shape dropdown button
// d3.select("#shape-input")
//     .selectAll('myOptions')
//         .data(uniqueShapes.sort(d3.ascending))
//     .enter()
//         .append('option')       
//     .text(function (d) { return d; }) // text shown in the menu
//     .attr("value", function (d) { return d; }); // corresponding value returned by the button


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
};

//Display complete dataset
fillTable(tableData);

//Button event handler
button.on("click", function() {
    //collect inputs
    dateInput = d3.select("#datetime-input").property ("value");
    cityInput = d3.select("#city-input").property ("value"); 
    stateInput = d3.select("#state-input").property ("value"); 
    countryInput = d3.select("#country-input").property ("value");

    //filter data
    if (dateInput) {selectedData1 = tableData.filter(tableData => (tableData.datetime === dateInput))}
    else {selectedData1 = tableData};

    if (cityInput) {selectedData2 = selectedData1.filter(selectedData1 => (selectedData1.city === cityInput))}
    else {selectedData2 = selectedData1}; 

    if (stateInput) {selectedData3 = selectedData2.filter(selectedData2 => (selectedData2.state === stateInput))}
    else {selectedData3 = selectedData2};

    if (countryInput) {selectedData4 = selectedData3.filter(selectedData3 => (selectedData3.country === countryInput))}
    else {selectedData4 = selectedData3};

    if (d3.select("#changing-input").property("checked")) {selectedData5 = selectedData4}
    else {selectedData5 = selectedData4.filter(selectedData4 => (selectedData4.shape != "changing"))};

    if (d3.select("#chevron-input").property("checked")) {selectedData6 = selectedData5}
    else {selectedData6 = selectedData5.filter(selectedData5 => (selectedData5.shape != "chevron"))};
    
    if (d3.select("#cigar-input").property("checked")) {selectedData7 = selectedData6}
    else {selectedData7 = selectedData6.filter(selectedData6 => (selectedData6.shape != "cigar"))};
    
    if (d3.select("#circle-input").property("checked")) {selectedData8 = selectedData7}
    else {selectedData8 = selectedData7.filter(selectedData7 => (selectedData7.shape != "circle"))};
    
    if (d3.select("#cross-input").property("checked")) {selectedData9 = selectedData8}
    else {selectedData9 = selectedData8.filter(selectedData8 => (selectedData8.shape != "cross"))};

    if (d3.select("#cylinder-input").property("checked")) {selectedData10 = selectedData9}
    else {selectedData10 = selectedData9.filter(selectedData9 => (selectedData9.shape != "cylinder"))};

    if (d3.select("#disk-input").property("checked")) {selectedData11 = selectedData10}
    else {selectedData11 = selectedData10.filter(selectedData10 => (selectedData10.shape != "disk"))};

    if (d3.select("#fireball-input").property("checked")) {selectedData12 = selectedData11} 
    else {selectedData12 = selectedData11.filter(selectedData11 => (selectedData11.shape != "fireball"))};

    if (d3.select("#flash-input").property("checked")) {selectedData13 = selectedData12}
    else {selectedData13 = selectedData12.filter(selectedData12 => (selectedData12.shape != "flash"))};

    if (d3.select("#formation-input").property("checked")) {selectedData14 = selectedData13}
    else {selectedData14 = selectedData13.filter(selectedData13 => (selectedData13.shape != "formation"))};

    if (d3.select("#light-input").property("checked")) {selectedData15 = selectedData14}
    else {selectedData15 = selectedData14.filter(selectedData14 => (selectedData14.shape != "light"))};

    if (d3.select("#other-input").property("checked")) {selectedData16 = selectedData15}
    else {selectedData16 = selectedData15.filter(selectedData15 => (selectedData15.shape != "other"))};

    if (d3.select("#oval-input").property("checked")) {selectedData17 = selectedData16}
    else {selectedData17 = selectedData16.filter(selectedData16 => (selectedData16.shape != "oval"))};

    if (d3.select("#rectangle-input").property("checked")) {selectedData18 = selectedData17}
    else {selectedData18 = selectedData17.filter(selectedData17 => (selectedData17.shape != "rectangle"))};

    if (d3.select("#sphere-input").property("checked")) {selectedData19 = selectedData18}
    else {selectedData19 = selectedData18.filter(selectedData18 => (selectedData18.shape != "sphere"))};

    if (d3.select("#teardrop-input").property("checked")) {selectedData20 = selectedData19}
    else {selectedData20 = selectedData19.filter(selectedData19 => (selectedData19.shape != "teardrop"))};

    if (d3.select("#triangle-input").property("checked")) {selectedData21 = selectedData20}
    else {selectedData21 = selectedData20.filter(selectedData20 => (selectedData20.shape != "triangle"))};

    if (d3.select("#unknown-input").property("checked")) {selectedData22 = selectedData21}
    else {selectedData22 = selectedData21.filter(selectedData21 => (selectedData21.shape != "unknown"))};

  //display final selection in table
    fillTable(selectedData22)})
