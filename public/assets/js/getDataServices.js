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

    const url = "http://localhost/proyecto/app/Config/UserStatusController.php";

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



        })



}

function getRoleJson() {

    const url = "http://localhost/proyecto/app/Config/RoleController.php";

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



        })


}
function getDeleteJson(User_id,getArray) {

    if (confirm('¿Está seguro de que desea eliminar este usuario?')) {
        const url = `http://localhost/proyecto/app/Config/UserControllerDelete.php?User_id=${User_id}`;
        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "aplication/json"
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al eliminar usuario');
                }

                return response.json();
            })
            .then(data => {
                console.log(data);
              
            })
            .catch(error => {
                console.error('Error:', error);
            });

    }
}

