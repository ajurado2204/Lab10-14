var addOrRemoveButton;
var firstName;
var lastName;
var email;
var numOfRows;
var table;
//var myInterval;

window.onload = function(){
	// x functionality when window loads
	addOrRemoveButton = document.getElementsByTagName("button");
	table = document.getElementById("mytable");
	numOfRows = table.rows.length;

	for(var i = 0; i < addOrRemoveButton.length; i++) {
		addOrRemoveButton[i].addEventListener("click", myFunction);
	}
}

//delegates to add or remove functions
function myFunction(event){

	//if(numOfRows > 2){
	//	myInterval = setInterval(randomRemoval, Math.floor((Math.random() * 10000) + 1000));
	//}

	if(this.value == "add"){
		//add to the number of rows found
		//1. get values from the form
		firstName = document.getElementById('FirstName').value;
		lastName = document.getElementById('LastName').value;
		email = document.getElementById('Email').value;


		if(firstName === '' || lastName === '' || email === ''){
			alert("Please enter values for all inputs");
			document.getElementById("myform").reset();
		}else{
			addPerson(event);
		}
	}else{
		removePerson(this,event);
	}
}

//if form if fully complete and add button clicked then a person will be added
function addPerson(event){
	event.preventDefault();

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
	numOfRows++;

	for(var i = 0; i < addOrRemoveButton.length; i++) {
  	addOrRemoveButton[i].addEventListener("click", myFunction);  
	}
}


//if the removal button is clicked then you remove a person
function removePerson(r, e){
	e.preventDefault();
	var i = r.parentNode.parentNode.rowIndex;
	document.getElementById("mytable").deleteRow(i);
	numOfRows--;
}


//randomly removes a person from the table
//function randomRemoval(){
//
//	if(numOfRows < 3){
//		clearInterval(myInterval);
//	}else{
//		numOfRows--;
//		table.deleteRow(1);
//	}
//}
