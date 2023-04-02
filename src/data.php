<?php
$servername = "localhost";
$database = "practice";
$username = "root";
$password = "";

$mysqli = new mysqli($servername, $username, $password, $database);
if ($mysqli->connect_error) {
    die('Connect Error (' . $mysqli->connect_errno . ') ' . $mysqli->connect_error);
}

$result = $mysqli->query("SELECT * FROM accordion");
if ($mysqli->errno) {
die('Select Error (' . $mysqli->errno . ') ' . $mysqli->error);
}
while($row = mysqli_fetch_assoc($result))
    $data[] = $row;

header('Content-type: application/json');
echo json_encode($data);

$mysqli->close;
?>