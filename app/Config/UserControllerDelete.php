<?php
include_once('../Config/Config.php');

// sql query selctor
if (isset($_GET['User_id'])) {
    $user_id = $_GET['User_id'];

    $sql = "DELETE FROM user WHERE User_id = $user_id";

        if ($mysqli->query($sql) === TRUE) {
        echo json_encode(array("mensaje" => "Usuario eliminado con éxito"));
        } else {
        echo json_encode(array("error" => "Error al eliminar usuario: " . $mysqli->error));
        } 
    
}
else {
    echo json_encode(array("error" => "ID de usuario no proporcionado"));
}

// Cerrar conexión
$mysqli->close();
?>
