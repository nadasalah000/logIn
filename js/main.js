// ? design
var signUp = document.getElementById("signUp");
var signIn = document.getElementById("signIn");
var container = document.getElementById("container");
signUp.addEventListener('click', () => {
	container.classList.add("other-side");
});

signIn.addEventListener('click', () => {
	container.classList.remove("other-side");
});

// ? dynamic
// * elements html
var input1 = document.getElementById("put1");
var input2 = document.getElementById("put2");
var input3 = document.getElementById("put3");
var input4 = document.getElementById("put4");
var doneIco1 =document.getElementById("d-icon1");
var noIco1 =document.getElementById("n-icon1");
var doneIco2 =document.getElementById("d-icon2");
var noIco2 =document.getElementById("n-icon2");
var doneIco3 =document.getElementById("d-icon3");
var noIco3 =document.getElementById("n-icon3");
var doneIco4 =document.getElementById("d-icon4");
var noIco4 =document.getElementById("n-icon4");
var email = document.getElementById("email");
var password = document.getElementById("password");
var accEmail = document.getElementById("accEmail");
var yes1 = document.getElementById("yes1");
var no1 = document.getElementById("no1");
var yes2 = document.getElementById("yes2");
var no2 = document.getElementById("no2");
var linko = document.getElementById("linko");


// * variables
var acounts;
var rePassword;
var count1 = 0;
var count2 = 0;


// * functions
// ! sign up
function nameValidation(){
    var regex = /^[A-Za-z\s]{2,30}$/;
    if(regex.test(input1.value)===true){
        console.log("name done");
        input1.style.background="#d1e7dd";
        input1.style.borderColor= "#d1e7dd";
        input1.style.boxShadow="box-shadow: 1px 1px 1px #d1e7dd";
        doneIco1.classList.replace("d-none","d-block");
        noIco1.classList.replace("d-block","d-none");
    }else{
        input1.style.background="#f8d7da";
        input1.style.background="#f8d7da";
        input1.style.borderColor= "#f8d7da";
        input1.style.boxShadow="box-shadow: 1px 1px 1px #f8d7da";
        doneIco1.classList.replace("d-block","d-none");
        noIco1.classList.replace("d-none","d-block");
    }
}
function emailValidation(){
    var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(regex.test(input2.value)===true){
        console.log("email done");
        input2.style.background="#d1e7dd";
        input2.style.borderColor= "#d1e7dd";
        input2.style.boxShadow="box-shadow: 1px 1px 1px #d1e7dd";
        doneIco2.classList.replace("d-none","d-block");
        noIco2.classList.replace("d-block","d-none");
    }else{
        input2.style.background="#f8d7da";
        input2.style.borderColor= "#f8d7da";
        input2.style.boxShadow="box-shadow: 1px 1px 1px #f8d7da"
        doneIco2.classList.replace("d-block","d-none");
        noIco2.classList.replace("d-none","d-block");
    }
}
function passwordValidation(){
    var regex = /^[\S]{8,20}/;
    if(regex.test(input3.value)===true){
        console.log("pass done");
        input3.style.background="#d1e7dd";
        input3.style.borderColor= "#d1e7dd";
        input3.style.boxShadow="box-shadow: 1px 1px 1px #d1e7dd";
        doneIco3.classList.replace("d-none","d-block");
        noIco3.classList.replace("d-block","d-none");
    }else if(regex.test(input3.value)===false){
        input3.value ="";
        input3.style.background="#f8d7da";
        input3.style.borderColor= "#f8d7da";
        input3.style.boxShadow="box-shadow: 1px 1px 1px #f8d7da"
        doneIco3.classList.replace("d-block","d-none");
        noIco3.classList.replace("d-none","d-block");
        alert("no pass")
    }
    rePassword = input3.value;
}
function rePasswordValidation(){
    if(input4.value === rePassword){
        console.log("re-pass done");
        input4.style.background="#d1e7dd";
        input3.style.borderColor= "#d1e7dd";
        input3.style.boxShadow="box-shadow: 1px 1px 1px #d1e7dd";
        doneIco4.classList.replace("d-none","d-block");
        noIco4.classList.replace("d-block","d-none");
    }else{
        input4.style.background="#f8d7da";
        input4.style.borderColor= "#f8d7da";
        input4.style.boxShadow="box-shadow: 1px 1px 1px #f8d7da"
        input3.style.background="#f8d7da";
        input3.style.borderColor= "#f8d7da";
        input3.style.boxShadow="box-shadow: 1px 1px 1px #f8d7da"
        doneIco4.classList.replace("d-block","d-none");
        noIco4.classList.replace("d-none","d-block");
        doneIco3.classList.replace("d-block","d-none");
        noIco3.classList.replace("d-none","d-block");
    }
}

if(localStorage.getItem("acounts")){
    acounts = JSON.parse(localStorage.getItem("acounts"));
    console.log(acounts);
}else{
    acounts = [];
}

function saveToLocalStorage(){
    localStorage.setItem("acounts", JSON.stringify(acounts));
}
function addAcount(){
    if(input4.value === rePassword){
    var acount = {
       name:input1.value,
       email:input2.value,
       password:input3.value,
       rrePassword:input4.value
    }
    acounts.push(acount);
    console.log(acounts);
    saveToLocalStorage();
}
}
function displayAcounts(aList){
   console.log("on")
   var cartonna = "";
   for(var i=0; i<aList.length; i++){
       cartonna += `<option value="${aList[i].email}">`
   }
      accEmail.innerHTML = cartonna;
}
function validateForm2() {
    let a = document.forms["myForm2"]["fname2"].value;
    let b = document.forms["myForm2"]["femail2"].value;
    let c = document.forms["myForm2"]["fpass2"].value;
    let d = document.forms["myForm2"]["frepass2"].value;
    if(a == "" && b == "" && c == "" && d == ""){
        alert("sorry");
        console.log("Empty");
        clearAll();
    }
    if(a != "" && b != "" && c != "" && d != ""){
        addAcount();
        console.log("Not Empty");
    }
    if (a == "") {
      doneIco1.classList.replace("d-block","d-none");
      noIco1.classList.replace("d-block","d-none");
      input1.style.background="#F3FDE4";
      input1.style.borderColor= "#78968b";
      input1.style.boxShadow="box-shadow: 2px 2px 2px #78968b";
      alert("Name must be filled out");
      return false;
    }
    if(b == ""){
        doneIco2.classList.replace("d-block","d-none");
        noIco2.classList.replace("d-block","d-none");
        input2.style.background="#F3FDE4";
        input2.style.borderColor= "#78968b";
        input2.style.boxShadow="box-shadow: 2px 2px 2px #78968b";
        alert("email must be filled out");
         return false;
    }
    if (c == "") {
        doneIco3.classList.replace("d-block","d-none");
       noIco3.classList.replace("d-block","d-none");
        input3.style.background="#F3FDE4";
        input3.style.borderColor= "#78968b";
        input3.style.boxShadow="box-shadow: 2px 2px 2px #78968b";
        alert("password must be filled out");
        return false;
      }
    if(d == ""){
        doneIco4.classList.replace("d-block","d-none");
        noIco4.classList.replace("d-block","d-none");
        input4.style.background="#F3FDE4";
        input4.style.borderColor= "#78968b";
        input4.style.boxShadow="box-shadow: 2px 2px 2px #78968b";
          alert("re-password must be filled out");
           return false;
      }
}
function clearAll(){
    doneIco1.classList.replace("d-block","d-none");
      noIco1.classList.replace("d-block","d-none");
      input1.style.background="#F3FDE4";
      input1.style.borderColor= "#78968b";
      input1.style.boxShadow="box-shadow: 2px 2px 2px #78968b";
      doneIco2.classList.replace("d-block","d-none");
      noIco2.classList.replace("d-block","d-none");
      input2.style.background="#F3FDE4";
      input2.style.borderColor= "#78968b";
      input2.style.boxShadow="box-shadow: 2px 2px 2px #78968b";
      doneIco3.classList.replace("d-block","d-none");
      noIco3.classList.replace("d-block","d-none");
      input3.style.background="#F3FDE4";
      input3.style.borderColor= "#78968b";
      input3.style.boxShadow="box-shadow: 2px 2px 2px #78968b";
      doneIco4.classList.replace("d-block","d-none");
      noIco4.classList.replace("d-block","d-none");
      input4.style.background="#F3FDE4";
      input4.style.borderColor= "#78968b";
      input4.style.boxShadow="box-shadow: 2px 2px 2px #78968b";
}
// ! sign in 
function typeEmail(){
    var term = email.value;
    var searchEmail =[];
    for(var i=0; i<acounts.length; i++){
        if(acounts[i].email.toLowerCase().includes(term.toLowerCase())){
            searchEmail.push(acounts[i]);
        }
    }
    displayAcounts(searchEmail);
}
function valid1(){
    var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(regex.test(email.value)===true){
        console.log("email valid");
        yes1.classList.replace("d-none","d-block");
        no1.classList.replace("d-block","d-none");
         email.style.background="#d1e7dd";
         email.style.borderColor= "#d1e7dd";
         email.style.boxShadow="box-shadow: 1px 1px 1px #d1e7dd";
         count1 = count1 +1;
         console.log("point one");
    }else{
        console.log("email not valid");
        no1.classList.replace("d-none","d-block");
        yes1.classList.replace("d-block","d-none");
         email.style.background="#f8d7da";
         email.style.borderColor= "#f8d7da";
         email.style.boxShadow="box-shadow: 1px 1px 1px #f8d7da"
    }
}
function valid2(){
    var regex = /^[\S]{8,20}/;
    if(regex.test(password.value)===true){
        console.log("pass valid");
        yes2.classList.replace("d-none","d-block");
        no2.classList.replace("d-block","d-none");
         password.style.background="#d1e7dd";
         password.style.borderColor= "#d1e7dd";
         password.style.boxShadow="box-shadow: 1px 1px 1px #d1e7dd";
         count2 = count2 +1;
         console.log("point two");
    }else{
        console.log("pass not valid");
        no2.classList.replace("d-none","d-block");
        yes2.classList.replace("d-block","d-none");
         password.style.background="#f8d7da";
         password.style.borderColor= "#f8d7da";
         password.style.boxShadow="box-shadow: 1px 1px 1px #f8d7da"
    }
}
function validateForm() {
    let x = document.forms["myForm"]["femail"].value;
    let y = document.forms["myForm"]["fpass"].value;
    
    if(x == "" && y == ""){
        console.log("Empty")
    }
    if(x != "" && y != ""){
        console.log("Not Empty")
    }
    if (x == "") {
      alert("Please, enter your email");
      return false;
    }
    if(y == ""){
       alert("Please, enter your password");
       return false;
    }
}
function clearo(){
    if(count1 == 1 && count2 ==1){
        console.log("two point done");
        linko.classList.replace("d-none","d-block");
    }else if(count1 == 0 && count2 ==0){
        console.log("not found email and password");
        alert("To log in, follow the steps in order: 1 Enter your correct email 2 Enter your correct password 3 Choose Are you a human?");
        document.getElementById("HU").checked = false;
        clear();
    }else if(count1 == 1 && count2 ==0){
        document.getElementById("HU").checked = false;
        password.value ="";
        no2.classList.replace("d-block","d-none");
        yes2.classList.replace("d-block","d-none");
        password.style.background="#F3FDE4";
        password.style.borderColor= "#78968b";
        password.style.boxShadow="box-shadow: 2px 2px 2px #78968b"
        alert("enter the correct password")
    }
}
function clear(){
        password.value ="";
        no2.classList.replace("d-block","d-none");
        yes2.classList.replace("d-block","d-none");
        password.style.background="#F3FDE4";
        password.style.borderColor= "#78968b";
        password.style.boxShadow="box-shadow: 2px 2px 2px #78968b";
        email.value ="";
        no1.classList.replace("d-block","d-none");
        yes1.classList.replace("d-block","d-none");
        email.style.background="#F3FDE4";
        email.style.borderColor= "#78968b";
        email.style.boxShadow="box-shadow: 2px 2px 2px #78968b"
}