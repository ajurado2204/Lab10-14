var addOrRemoveButton = document.getElementsByTagName("button");
//var myInterval = setInterval(randomRemoval, Math.floor((Math.random() * 10000) + 1000));

//add to the number of rows found
//1. get values from the form
var firstName = document.getElementById("FirstName").value;
var lastName = document.getElementById("LastName").value;
var email = document.getElementById("Email").value;

for(var i = 0; i < addOrRemoveButton.length; i++) {
  addOrRemoveButton[i].addEventListener("click", myFunction);  
}

//delegates to add or remove functions
function myFunction(){
	if(this.value == "add"){
		if(firstName === '' || lastName === '' || email === ''){
			alert("Please enter values for all inputs");
			document.getElementById("myform").reset();
		}else{
			addPerson();
		}
	}else{
		removePerson(this);
	}
}

//if form if fully complete and add button clicked then a person will be added
function addPerson(){
	var table = document.getElementById("mytable");
	var numOfRows = table.rows.length;

	//2. add values to table
	var row = table.insertRow(numOfRows-1);
	var newButton = document.createElement("button");

	newButton.type = "submit"; 
	newButton.value = "remove";

	var col1 = row.insertCell(0);
	var col2 = row.insertCell(1);
	var col3 = row.insertCell(2);
	var col4 = row.insertCell(3);

	col1.innerHTML = firstName;
	col2.innerHTML = lastName;
	col3.innerHTML = email;
	col4.appendChild( newButton).innerHTML = "-";

	var addOrRemoveButton = document.getElementsByTagName("button");

	for(var i = 0; i < addOrRemoveButton.length; i++) {
  	addOrRemoveButton[i].addEventListener("click", myFunction);  
	}


}


//if the removal button is clicked then you remove a person
function removePerson(r){
	var table = document.getElementById("mytable");
	var i = r.parentNode.parentNode.rowIndex;
	document.getElementById("mytable").deleteRow(i);


  var c = document.getElementsByTagName("tbody")[0];
  var myrows = c.rows;
  console.log(myrows);

  for(var j = 0; j < myrows.length; j++){
  	for(var k = 0; k < myrows[j].childElementCount; k++){
  		console.log(myrows[j].children[k]);
  	}
  }
}


//randomly removes a person from the table
/*function randomRemoval(){
	var table = document.getElementById("mytable");
	var numOfRows = table.rows.length;
	if(numOfRows < 3){
		clearInterval(myInterval);
	}else{
		table.deleteRow(1);
	}
}*/
