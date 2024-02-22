function getUserJson() {

    const url = "http://localhost/proyecto/app/Config/UserController.PHP";

    fetch(url, {
        method: "GET", // or 'PUT' // data can be `string` or {object}!
        headers: {
            "Content-Type": "application/json"
        },
    })
        .then(response => response.json())
        .then(data => {

            createTableArray(data);
        })
        .catch(error => console.error('Error:', error));


}
function getUserStatusJson() {

    const url = "";

    fetch(url, {
        method: "GET", // or 'PUT' // data can be `string` or {object}!
        headers: {
            "Content-Type": "application/json"
        },
    })
        .then(response => response.json())
        .then(data => {

            if (data.length == 0) {
                alert("Not data");
            } else {
                createSelectArray(data, "User_status_id");
            }

            hideenPreload();


        })
        .catch(error => { console.error('Error:', error); hideenPreload(); });


}

function getRoleJson() {

    const url = "";

    fetch(url, {
        method: "GET", // or 'PUT' // data can be `string` or {object}!
        headers: {
            "Content-Type": "application/json"
        },
    })
        .then(response => response.json())
        .then(data => {

            if (data.length == 0) {
                alert("Not data");
            } else {
                createSelectArray(data, "Role_id");
            }

            hideenPreload();


        })
        .catch(error => { console.error('Error:', error); hideenPreload(); });


}