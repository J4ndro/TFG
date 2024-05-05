<?php
require "../../modelo/Bd.php";
require "../../modelo/Pedidos.php";

$link = new Bd;
$pedidos = Pedidos::getAll($link->link);

$pedidosArray = array();

while ($fila = $pedidos->fetch(PDO::FETCH_ASSOC)) {
    $pedidosArray[] = $fila;
}

header('Content-Type: application/json');
echo json_encode($pedidosArray);

exit();

