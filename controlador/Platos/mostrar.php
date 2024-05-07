<?php
require "../../modelo/Platos.php";

$link = new Bd();
$user = Platos::getAll($link->link);

$userArray = array();

while ($fila = $user->fetch(PDO::FETCH_ASSOC)) {
    $userArray[] = $fila;
}

// Devuelve los datos en formato JSON y asegúrate de que no haya salida adicional
header('Content-Type: application/json');
echo json_encode($userArray);
