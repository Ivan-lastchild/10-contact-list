
const table = document.querySelector('.table');
const btn = document.querySelector(".btn");
const userName = document.querySelector(".user_name");
const userSurname = document.querySelector(".user_surname");
const userNumber = document.querySelector(".user_number");

btn.addEventListener('click', addToContacts);

console.log(!isNaN("sdf345345"));

function addToContacts(){

    checkEmptyCell(userName, userSurname, userNumber);
    cleanForms(userName, userSurname, userNumber);

}

function createRow(){
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    cell1.innerHTML = `${userName.value}`;
    cell2.innerHTML = `${userSurname.value}`;
    cell3.innerHTML = `${+userNumber.value}`;
}

function checkEmptyCell(form1, form2, form3){
    if(!form1.value || !form2.value || !form3.value) {
        alert('Please, add all cells');
    } else if((!isNaN(form1.value) || !isNaN(form2.value)) || isNaN(form3.value)){
        alert("Please, add correct values");
    } else createRow();
}

function cleanForms(form1, form2, form3){
    form1.value = '';
    form2.value = '';
    form3.value = '';
}

