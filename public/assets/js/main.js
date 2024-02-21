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
function formDisable(id){
    objForm = document.getElementById(id);
    elements = objForm.querySelectorAll("input");
    elementsLeng = elements.length;
    for (let i =0; i < elementsLeng;i ++){
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
function showModal(){
    myModal.show();
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