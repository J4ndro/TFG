<?php
require "../../modelo/BD.php";
require "../../modelo/Pedidos.php";

// Obtener idPedidos de la URL
if (isset($_GET['idPedido'])) {
    $idPedido = $_GET['idPedido'];

    $link = new BD();
    $pedido = new Pedidos($idPedido, "", "", "", "", "", "");

    $resultado = $pedido->borrar($link);
    header('Location: ../../../../virtualmarket/vistas/Pedidos/pedidos.html');

} else {
    echo "Error: idPedidos no proporcionado";
}