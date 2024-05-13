<?php
require "../../modelo/Usuario.php";
require "../../modelo/CaracteristicasUsuario.php";

// Verifica si se recibieron datos del formulario
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Recibe los datos del formulario
    $nombre = isset($_POST['nombre']) ? $_POST['nombre'] : '';
    $apellido = isset($_POST['apellido']) ? $_POST['apellido'] : '';
    $email = isset($_POST['email']) ? $_POST['email'] : '';
    $pwd = isset($_POST['pwd']) ? $_POST['pwd'] : '';

    // Crear una instancia de Usuario con los datos recibidos
    $user = new Usuario($nombre, $apellido, $email, $pwd);
    $statUser = new CaracteristicasUsuario("", $nombre, "", "", "", "", "");
    $link = new Bd;

    // Intenta insertar el usuario en la base de datos
    if ($user->insertar($link) && $statUser->insertar($link)) {
        // Si se inserta correctamente, devuelve los datos del usuario como respuesta en formato JSON
        $response = array(
            'nombre' => $nombre,
            'apellido' => $apellido,
            'email' => $email,
            'pwd' => $pwd,
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
