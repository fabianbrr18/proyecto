<?php
include_once('../Config/Config.php');

//sql query to  get data
$query =  "SELECT * FROM `user_status` WHERE 1; ";
$result = $mysqli->query($query);

//Convert result to JSON format
$data = [];
while($row = $result->fetch_assoc()){
    $data []= $row;
}
$result->free_result();
$mysqli->close();
echo json_encode($data)
?>