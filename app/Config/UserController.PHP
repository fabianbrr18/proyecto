<?php 
include_once('../Config/Config.php');
 
// sql query to get data
$query = "CALL sp_select_all_user()";
$result = $mysqli->query($query);

//Convert result to JSON format
$data = [];
while($row = $result->fetch_assoc()){
    $data []= $row;
}
// Set content type as JSON
header('Content-Type: application/json');
echo json_encode($data);
?>