<?php
require "../../modelo/CaracteristicasUsuario.php";

// Obtener los datos de los CaracteristicasUsuarios
$link = new Bd();
$user = CaracteristicasUsuario::getAll($link->link);

// Crear un array para almacenar los datos de los CaracteristicasUsuarios
$userArray = array();

// Iterar sobre los resultados y almacenarlos en el array
while ($fila = $user->fetch(PDO::FETCH_ASSOC)) {
    $userArray[] = $fila;
}

// Devolver los datos en formato JSON
header('Content-Type: application/json');
echo json_encode($userArray);
