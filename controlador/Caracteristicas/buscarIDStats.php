<?php
require "../../modelo/CaracteristicaUsuario.php";

if (isset($_GET['id_usuario'])) {
    $user = $_GET['id_usuario'];

    $link = new Bd;
    $lineas = CaracteristicaUsuario::buscar($link->link, $user);

    $lineasArray = array();

    while ($fila = $lineas->fetch(PDO::FETCH_ASSOC)) {
        $lineasArray[] = $fila['edad'];
    }

    header('Content-Type: application/json');
    echo json_encode($lineasArray);
} else {
    echo json_encode(array('error' => 'ID de pedido no proporcionado'));
}