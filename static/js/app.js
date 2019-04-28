// from data.js
let tableData = data;


let tbody = d3.select("tbody");

function displayData(data){ 
    tbody.text("")
    data.forEach(function(sighting){
    new_tr = tbody.append("tr")
    Object.entries(sighting).forEach(function([key, value]){
        new_td = new_tr.append("td").text(value)	
    })
})}

displayData(tableData);

// Select the submit button
let submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  let inputElement1 = d3.select("#datetime");
  let inputElement2 = d3.select("#city");
  let inputElement3 = d3.select("#state");
  let inputElement4 = d3.select("#country");
  let inputElement5 = d3.select("#shape");

  // Get the value property of the input element
  let inputValue1 = inputElement1.property("value");
  let inputValue2 = inputElement2.property("value");
  let inputValue3 = inputElement3.property("value");
  let inputValue4 = inputElement4.property("value");
  let inputValue5 = inputElement5.property("value");

  console.log(inputValue1);
  console.log(inputValue2);
  console.log(inputValue3);
  console.log(inputValue4);
  console.log(inputValue5);
  console.log(tableData);
  
  // separate filters for the 'and' and 'or' radio buttons
  let filteredAndData = tableData.filter(fData => fData.datetime === inputValue1 
                                               && fData.city === inputValue2 
                                               && fData.state === inputValue3
                                               && fData.country === inputValue4
                                               && fData.shape === inputValue5);   
  
  let filteredOrData  = tableData.filter(fData => fData.datetime === inputValue1 
                                               || fData.city === inputValue2 
                                               || fData.state === inputValue3
                                               || fData.country === inputValue4
                                               || fData.shape === inputValue5);
   
  //use appropriate filter based on what radio button is selected
  //the 'and' filter is all or none - better suited for a dropdown, but it works
  if($('#optAnd').prop('checked')){
  //    alert('and button is checked!');
        displayData(filteredAndData);
  }else{
  //    alert('Or button is checked!');
        displayData(filteredOrData);
  }
});

document.getElementById("ufo_form").reset();

