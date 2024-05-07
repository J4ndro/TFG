<?php
require "../../modelo/Menu.php";


if (isset($_POST['id_menu'])) {
    var_dump($_POST);
    $id_menu = $_POST['id_menu'];
    $nombre = $_POST['nombre'];
    $descripcion = $_POST['descripcion'];
    $complejidad = $_POST['complejidad'];

    // Utiliza la misma instancia de Bd
    $link = new Bd;
    $menu = new Menu($id_menu, $nombre, $descripcion, $complejidad);

    // Asegúrate de pasar el objeto $link a la función modificar
    // $menu->modificar($link);
    if ($menu->modificar($link)) {
        $response = array(
            'dni' => $id_menu,
            'nombre' => $nombre,
            'descripcion' => $descripcion,
            'complejidad' => $complejidad
        );

        echo json_encode($response);
        echo ("<br><a href='../../index.php'>Volver</a>");
    } else {
        echo json_encode(array('error' => 'Va mal'));

    }
}
