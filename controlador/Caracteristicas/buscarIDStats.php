<?php
require "../../modelo/CaracteristicasUsuario.php";
$body = file_get_contents("php://input");
$data = json_decode($body);

// Obtener el nombre de usuario de los datos recibidos
$id_usuario = $data->id_usuario;

// Lógica para obtener los datos necesarios (por ejemplo, desde la base de datos)
$link = new Bd;
$lineas = CaracteristicasUsuario::getAllID($link->link, $id_usuario);
$lineasArray = array();

while ($fila = $lineas->fetch(PDO::FETCH_ASSOC)) {
    $lineasArray = array(
        "id" => $fila['id_usuario'],
        "altura" => $fila['altura'],
        "peso" => $fila['peso'],
        "edad" => $fila['edad'],
    );
}

header('Content-Type: application/json');
echo json_encode($lineasArray);

