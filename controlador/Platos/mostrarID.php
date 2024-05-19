<?php
require "../../modelo/Platos.php";


$body = file_get_contents("php://input");
$data = json_decode($body);

$id_usuario = $data->id_usuario;

$link = new Bd;
$platos = Platos::get($link->link, $id_usuario);
$platosArray = array();

while ($fila = $platos->fetch(PDO::FETCH_ASSOC)) {
    $platosArray[] = $fila;
}

// Devolver los datos en formato JSON
header('Content-Type: application/json');
echo json_encode($platosArray);

