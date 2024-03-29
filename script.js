
let inputField = ""
let cityName =['Faisalabad','Lahore','Karachi','Islamabad','Queta']

// simple alert function
document.getElementById('simple-alert').onclick = function (){
    document.getElementById('show-output').innerHTML = ""
    document.getElementById('original-statement').innerHTML = "" 

    inputField = document.getElementById('userinput');
    
    alert("The value you entered is: " + inputField.value);
    document.getElementById('userinput').value = ""
}

// print name function
document.getElementById('print-name').onclick = function (){
    document.getElementById('show-output').innerHTML = ""
    document.getElementById('original-statement').innerHTML = "" 

     inputField = document.getElementById('userinput');
    
    document.getElementById('show-output').innerHTML = "Your Name is <b>" + inputField.value + "<b/>"
    document.getElementById('userinput').value = ""
}

// print cityname function
document.getElementById('print-city').onclick = function (){
    document.getElementById('show-output').innerHTML = ""
    document.getElementById('original-statement').innerHTML = ""

   document.getElementById('original-statement').style.backgroundColor = "#041f43"
   document.getElementById('original-statement').style.color = "white"

   for (let index = 0; index < cityName.length; index++) {
    const element = cityName[index];
    document.getElementById('original-statement').innerHTML += index + ") " + element + " " 
   }
}

// add city in array function
document.getElementById('add-city').onclick = function (){
    inputField = document.getElementById('userinput');
    cityName.push(inputField.value);
    alert("City is added in the list")

   document.getElementById('userinput').value = ""
}

// generate table function
document.getElementById('generate-table').onclick = function (){
    document.getElementById('show-output').innerHTML = ""
    document.getElementById('original-statement').innerHTML = "" 

    inputField = document.getElementById('userinput');
    let tableUpto = prompt("Generate Table Upto ");
    for (let index = 1; index <= tableUpto; index++) {
        let product = inputField.value * index
        const element = inputField.value + "  *  " + index + "  =  " + product;
        document.getElementById('show-output').innerHTML += element + "<br />"
        
    }
    document.getElementById('userinput').value = ""
}

// clear output function
document.getElementById('clear-output').onclick = function (){
    document.getElementById('show-output').innerHTML = "" 
    
}

// clear input field function
document.getElementById('button-addon2').onclick = function (){
   document.getElementById('userinput').value = "" 
    
}