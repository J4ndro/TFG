<?php
require "../../modelo/Usuario.php";
$body = file_get_contents("php://input");
$data = json_decode($body);

// Obtener el nombre de usuario de los datos recibidos
$username = $data->username;

// Lógica para obtener los datos necesarios (por ejemplo, desde la base de datos)
$link = new Bd;
$lineas = Usuario::getAllID($link->link, $username);
$lineasArray = array();

while ($fila = $lineas->fetch(PDO::FETCH_ASSOC)) {
    $lineasArray = array(
        "id" => $fila['id_usuario'],
        "nombre" => $fila['nombre'],
        "apellido" => $fila['apellido'],
        "email" => $fila['email'],
        "pwd" => $fila['pwd']
    );
    // $lineasArray[] = $linea;
}

// Devolver los datos en formato JSON
header('Content-Type: application/json');
echo json_encode($lineasArray);

