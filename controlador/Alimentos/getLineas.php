<?php
require "../../modelo/Bd.php";
require "../../modelo/Lineapedidos.php";

if (isset($_GET['idPedido'])) {
    $idPedido = $_GET['idPedido'];

    $link = new Bd;
    $lineas = Linea::getAll($link->link, $idPedido);

    $lineasArray = array();

    while ($fila = $lineas->fetch(PDO::FETCH_ASSOC)) {
        $lineasArray[] = $fila;
    }

    header('Content-Type: application/json');
    echo json_encode($lineasArray);
} else {
    echo json_encode(array('error' => 'ID de pedido no proporcionado'));
}

