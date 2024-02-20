const myModal = new bootstrap.Modal(document.getElementById("modalUser"), {});
var objForm = null;
var elements = null;
var elementsLeng = 0

/*************/
window.addEventListener("load",function(){
    getUserJson();
    getUserStatusJson();
    getRoleJson();  
});

function validateForm() {
    /**This is the variable declarations*/
    objForm = document.getElementById("form_login");
    elements = objForm.querySelectorAll("input");
    for (let i = 0; i < elements.length; i++) {
        console.log(elements[i].value);
        if (elements[i].value == "") {
            alert("Valide los datos ingresados");
            elements[i].focus();
            return false;
        }
    }
}

function getData(id, e) {
    var validate=false;
    if (validateForm(id)) {
        //getDataForm(id);
        validate=true;
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




function createUser(id) {
    clearData(id);
    formEnable(id);
    showModal();
}

