<?php
require "../../modelo/Menu.php";

// Obtener los datos de los Menus
$link = new Bd();
$menu = Menu::getAll($link->link);

// Crear un array para almacenar los datos de los Menus
$menuArray = array();

// Iterar sobre los resultados y almacenarlos en el array
while ($fila = $menu->fetch(PDO::FETCH_ASSOC)) {
    $menuArray[] = $fila;
}

// Devolver los datos en formato JSON
header('Content-Type: application/json');
echo json_encode($menuArray);