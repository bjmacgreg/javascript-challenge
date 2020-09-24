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

// Set up options for shape dropdown button
d3.select("#shape-input")
    .selectAll('myOptions')
        .data(uniqueShapes.sort(d3.ascending))
    .enter()
        .append('option')       
    .text(function (d) { return d; }) // text shown in the menu
    .attr("value", function (d) { return d; }); // corresponding value returned by the button


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
//   allShapesInput = d3.select("#allshapes-input").property ("value");
//   selectShapesInput = d3.select("#selectshapes-input").property ("value");
//   shapeInput = d3.select("#shape-input").property ("value");
    changingInput = d3.select("#changing-input").property ("value");
    chevronInput = d3.select("#chevron-input").property ("value"); 
    cigarInput = d3.select("#cigar-input").property ("value"); 
    circleInput = d3.select("#circle-input").property ("value");
    crossInput = d3.select("#cross-input").property ("value");
    cylinderInput = d3.select("#cylinder-input").property ("value"); 
    diskInput = d3.select("#disk-input").property ("value"); 
    fireballInput = d3.select("#fireball-input").property ("value");
    flashInput = d3.select("#flash-input").property ("value");
    formationInput = d3.select("#formation-input").property ("value"); 
    lightInput = d3.select("#light-input").property ("value"); 
    otherInput = d3.select("#other-input").property ("value");
    ovalInput = d3.select("#oval-input").property ("value");
    rectangleInput = d3.select("#rectangle-input").property ("value"); 
    sphereInput = d3.select("#sphere-input").property ("value"); 
    teardropInput = d3.select("#teardrop-input").property ("value");
    triangleInput = d3.select("#triangle-input").property ("value"); 
    unknownInput = d3.select("#unknown-input").property ("value");

    //filter data
    if (dateInput) {selectedData1 = tableData.filter(tableData => (tableData.datetime === dateInput))}
    else {selectedData1 = tableData};

    if (cityInput) {selectedData2 = selectedData1.filter(selectedData1 => (selectedData1.city === cityInput))}
    else {selectedData2 = selectedData1}; 

    if (stateInput) {selectedData3 = selectedData2.filter(selectedData2 => (selectedData2.state === stateInput))}
    else {selectedData3 = selectedData2};

    if (countryInput) {selectedData4 = selectedData3.filter(selectedData3 => (selectedData3.country === countryInput))}
    else {selectedData4 = selectedData3};

    if (changingInput) {selectedData5 = selectedData4.filter(selectedData4 => (selectedData4.shape === changingInput))}
    else {selectedData5 = selectedData4};

    if (chevronInput) {selectedData6 = selectedData5.filter(selectedData5 => (selectedData5.shape === chevronInput))}
    else {selectedData6 = selectedData5};

    if (cigarInput) {selectedData7 = selectedData6.filter(selectedData6 => (selectedData6.shape === cigarInput))}
    else {selectedData7 = selectedData6};

    if (circleInput) {selectedData8 = selectedData7.filter(selectedData7 => (selectedData7.shape === circleInput))}
    else {selectedData8 = selectedData7};

    if (crossInput) {selectedData9 = selectedData8.filter(selectedData8 => (selectedData8.shape === crossInput))}
    else {selectedData9 = selectedData8};

    if (cylinderInput) {selectedData10 = selectedData9.filter(selectedData9 => (selectedData9.shape === cylinderInput))}
    else {selectedData10 = selectedData9};

    if (diskInput) {selectedData11 = selectedData10.filter(selectedData10 => (selectedData10.shape === diskInput))}
    else {selectedData11 = selectedData10};

    if (fireballInput) {selectedData12 = selectedData11.filter(selectedData11 => (selectedData11.shape === fireballInput))}
    else {selectedData12 = selectedData11};

    if (flashInput) {selectedData13 = selectedData12.filter(selectedData12 => (selectedData12.shape === flashInput))}
    else {selectedData13 = selectedData12};

    if (formationInput) {selectedData14 = selectedData13.filter(selectedData13 => (selectedData13.shape === formationInput))}
    else {selectedData14 = selectedData13};

    if (lightInput) {selectedData15 = selectedData14.filter(selectedData14 => (selectedData14.shape === lightInput))}
    else {selectedData15 = selectedData14};

    if (otherInput) {selectedData16 = selectedData15.filter(selectedData15 => (selectedData15.shape === otherInput))}
    else {selectedData16 = selectedData15};

    if (ovalInput) {selectedData17 = selectedData16.filter(selectedData16 => (selectedData16.shape === ovalInput))}
    else {selectedData17 = selectedData16};

    if (rectangleInput) {selectedData18 = selectedData17.filter(selectedData17 => (selectedData17.shape === rectangleInput))}
    else {selectedData18 = selectedData17};

    if (sphereInput) {selectedData19 = selectedData18.filter(selectedData18 => (selectedData18.shape === sphereInput))}
    else {selectedData19 = selectedData18};

    if (teardropInput) {selectedData20 = selectedData19.filter(selectedData19 => (selectedData19.shape === teardropInput))}
    else {selectedData20 = selectedData19};

    if (triangleInput) {selectedData21 = selectedData20.filter(selectedData20 => (selectedData20.shape === triangleInput))}
    else {selectedData21 = selectedData20};

    if (unknownInput) {selectedData22 = selectedData21.filter(selectedData21 => (selectedData21.shape === unknownInput))}
    else {selectedData22 = selectedData21};

//   if (allShapesInput) {selectedData5 = selectedData4}
//   else {selectedData5 = selectedData4.filter(selectedData4 => (selectedData4.shape === shapeInput))}  
//   else if (selectShapesInput) {selectedData5 = selectedData4.filter(selectedData4 => (selectedData4.shape === shapeInput))}
//   else {selectedData5 = selectedData4};

  //display final selection in table
  fillTable(selectedData22)})