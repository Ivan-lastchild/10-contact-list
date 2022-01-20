const table = document.querySelector('.table');
const addToListBtn = document.querySelector(".btn");
const userName = document.querySelector(".user_name");
const userSurname = document.querySelector(".user_surname");
const userNumber = document.querySelector(".user_number");
const reg = /^[$A-Za-zА-Яа-яъё]+$/;
const regNum = /^[0-9]+$/;

addToListBtn.addEventListener('click', onAddToListBtnClick);

function onAddToListBtnClick(){

    if(isEmptyCells(userName, userSurname, userNumber)){
        alert('Please, add all cells');
    } else if(isValidData(userName, userSurname, userNumber)){
        alert("Please, add correct values");
    }else createRow();

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

function isEmptyCells(form1, form2, form3){
    return !form1.value || !form2.value || !form3.value ;
}

function isValidData(form1, form2, form3){
    return !reg.test(form1.value) || !reg.test(form2.value) || !regNum.test(form3.value);
}

function cleanForms(form1, form2, form3){
    form1.value = '';
    form2.value = '';
    form3.value = '';
}

