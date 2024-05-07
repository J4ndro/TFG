<?php
require "../../modelo/Menu.php";

if (isset($_GET['id_menu'])) {
    $id_menu = $_GET['id_menu'];

    $link = new Bd;
    $lineas = Menu::getAllID($link->link, $id_menu);

    $lineasArray = array();

    while ($fila = $lineas->fetch(PDO::FETCH_ASSOC)) {
        $lineasArray[] = $fila['nombre'];
    }

    header('Content-Type: application/json');
    echo json_encode($lineasArray);
} else {
    echo json_encode(array('error' => 'ID de pedido no proporcionado'));
}