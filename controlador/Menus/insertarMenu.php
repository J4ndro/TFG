<?php
require "../../modelo/Menu.php";

// Verifica si se recibieron datos del formulario
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Recibe los datos del formulario
    $nombre = isset($_POST['nombre']) ? $_POST['nombre'] : '';
    $descripcion = isset($_POST['descripcion']) ? $_POST['descripcion'] : '';

    echo ($nombre);
    // Crear una instancia de Usuario con los datos recibidos
    $menu = new Menu($nombre, $descripcion);
    $link = new Bd;

    // Intenta insertar el usuario en la base de datos
    if ($menu->insertar($link)) {
        // Si se inserta correctamente, devuelve los datos del usuario como respuesta en formato JSON
        $response = array(
            'nombre' => $nombre,
            'descripcion' => $descripcion,
        );
        echo json_encode($response);
    } else {
        // Si ocurre un error al insertar, devuelve un mensaje de error en formato JSON
        echo json_encode(array('error' => 'Error al insertar el usuario'));
    }
} else {
    // Si la solicitud no es un POST, devuelve un mensaje de error en formato JSON
    echo json_encode(array('error' => 'Solicitud incorrecta'));
}
