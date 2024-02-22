<?php 
// database configuration
$host = "localhost";
$user = "root";
$password = "";
$myDB = "apiSENA";
$data = array();
$mysqli = new mysqli($host, $user, $password, $myDB);

if($mysqli->connect_error){
    echo("Failed to connect" . $mysqli->connect_error);
}else{
    //echo("Connect OK");
}
?>