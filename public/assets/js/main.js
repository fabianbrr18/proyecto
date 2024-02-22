const myModal = new bootstrap.Modal(document.getElementById("modalUser"), {});
var objForm = null;
var elements = null;
var elementsLeng = 0

/*************/
window.addEventListener("load", function () {
    getUserJson();
    getUserStatusJson();
    getRoleJson();
});


function getData(id, e) {
    var validate = false;
    if (validateForm(id)) {
        //getDataForm(id);
        validate = true;
    }


    alert(validate);
    e.preventDefault();
    return validate;
}

function validateForm(id) {

    objForm = document.getElementById(id);
    elements = objForm.querySelectorAll("input");
    elementsLeng = elements.length;

    for (let i = 0; i < elementsLeng; i++) {
        let element = elements[i];
        if (element.value == "" || element.length == 0) {
            alert("Error: Validate Element");
            element.classList.add('errorInput');
            return false;
        } else {
            element.classList.remove('errorInput');
        }
    }
    return true;
}

function getDataForm(id) {
    objForm = document.getElementById(id);
    elementsInput = objForm.querySelectorAll("input");
    elementsSelect = objForm.querySelectorAll("select");
    elementsLeng = elementsInput.length;
    elementsLengSelect = elementsSelect.length;
    for (let i = 0; i < elementsLeng; i++) {
        let element = elementsInput[i];
        console.log(element.value);
    }
    for (let i = 0; i < elementsLengSelect; i++) {
        let element = elementsSelect[i];
        console.log(element.value);
    }
}

/** function clear data 
 * (id) is identification the form
 */

function clearData(id) {
    objForm = document.getElementById(id);
    elements = objForm.querySelectorAll("input");
    elementsLeng = elements.length;
    for (let i = 0; i < elementsLeng; i++) {
        let element = elements[i];
        element.value = "";
    }

}

/**functions form enable 
 * (id) is identification the form
 */
function formEnable(id) {
    objForm = document.getElementById(id);
    elements = objForm.querySelectorAll("input");
    elementsLeng = elements.length;
    for (let i = 0; i < elementsLeng; i++) {
        let element = elements[i];
        element.disabled = false

    }
}

/**funtion form disable
 * (id) is identification the form
 */
function formDisabled(id) {
    objForm = document.getElementById(id);
    elements = objForm.querySelectorAll("input");
    elementsLeng = elements.length;
    for (let i = 0; i < elementsLeng; i++) {
        let element = elements[i];
        element.disabled = true
    }
}

/**funtion create user 
 * (id)is identification the form
 */
function createUser(id) {
    clearData(id);
    formEnable(id);
    showModal();
}

/**function show modal
 * 
 */
function showModal() {
    myModal.show();
}
/**
 * function view User modal
 */
function viewUser(id, idUser) {

    clearData(id);
    formDisabled(id);
    showModal();
    alert("ID USER" + idUser);
}

/**
 * function edit user (modal)
 */
function editUser(id, idUser) {
    clearData(id);
    formEnable(id);
    formEnableEdit(id);
    showModal();
    alert("ID USER" + idUser);
}
function formEnableEdit(id) {
    objForm = document.getElementById(id);
    elements = objForm.querySelectorAll(".input_disabled");
    elementsLeng = elements.length;
    for (let i = 0; i < elementsLeng; i++) {
        let element = elements[i];
        element.disabled = true;
    }
}

/**
 * function dele user (modal)
 */

function deleteUser(id) {
    let getConfirm = window.confirm("Seguro desea Eliminar?");
    if (getConfirm) {
        alert("OK DELETE");
    } else {
        alert("ERROR DELETE");
    }
}
/**function view password
 * 
 */
function viewPassword(idBtn) {
    let objBtn = document.getElementById(idBtn);
    let mySrc = "";
    let objImg = objBtn.firstChild;
    let textInput = "";
    let objInput = objBtn.parentElement.children[0];

    if (objInput.type == "text") {
        mySrc = "../../../public/assets/img/icons/eye-slash.svg";
        textInput = "password";
    } else {
        mySrc = "../../../public/assets/img/icons/eye.svg";
        textInput = "text";
    }
    objImg.src = mySrc;
    objInput.type = textInput;

}

/**function create table
 * 
 */
function createTable(getArray) {
    const containerTable = document.getElementById('id_table');
    const textTable = '<table class="table">';
    const tHead = '<thead><tr><th scope="col">#</th><th scope="col">First</th><th scope="col">Last</th><th scope="col">Handle</th></tr></thead><tbody>';
    const textTableEnd = '</tbody></table>';
    let rowTable = '';
    let row = getArray.length;

    for (let i = 0; i < row; i++) {
        rowTable = rowTable + '<tr><th scope="row">' + getArray[i].User_id + '</th><td>' + getArray[i].User_user + '</td><td>Otto</td><td>@mdo</td></tr>';

    }
    containerTable.innerHTML = textTable + tHead + row + textTable;
}
/**
 * funtion create table array
 */
function createTableArray(getArray) {
    const containerTbody = document.getElementById('myTable');
    var formId = "'form_login'";
    let rowTable = '';
    let row = getArray.length;

    for (let i = 0; i < row; i++) {
        rowTable = rowTable + '<tr><th scope="row">' + (i + 1) + '</th><td>' + getArray[i].User_user + '</td><td>' + getArray[i].User_status_name + '</td><td>' + getArray[i].Role_name + '</td><td><div ><button type="button" style="background-color: #C7C5F4;" onclick="viewUser(' + formId + ',' + getArray[i].User_id + ')"class="btn m-1"><img src="../../../public/assets/img/icons/eye.svg"></button><button type="button" style="background-color: #C7C5F4;" onclick="editUser(' + formId + ',' + getArray[i].User_id + ')"class="btn m-1"><img src="../../../public/assets/img/icons/pen.svg"></button><button type="button" style="background-color: #C7C5F4;" onclick="deleteUser(' + formId + ',' + getArray[i].User_id + ')"class="btn m-1"><img src="../../../public/assets/img/icons/trash.svg"></button></div></td></tr>';

    }
    containerTbody.innerHTML = rowTable;
}