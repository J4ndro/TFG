<?php
require "../../modelo/Usuario.php";

if (isset($_GET['email'])) {
    $user = $_GET['email'];

    $link = new Bd;
    $lineas = Usuario::getAllID($link->link, $user);

    $lineasArray = array();

    while ($fila = $lineas->fetch(PDO::FETCH_ASSOC)) {
        $lineasArray[] = $fila['nombre'];
    }

    header('Content-Type: application/json');
    echo json_encode($lineasArray);
} else {
    echo json_encode(array('error' => 'ID de pedido no proporcionado'));
}