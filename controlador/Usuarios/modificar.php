<?php
require "../../modelo/Usuario.php";


if (isset($_POST['email'])) {
    var_dump($_POST);
    $id_usuario = $_POST['id_usuario'];
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $email = $_POST['email'];
    $pwd = $_POST['pwd'];

    // Utiliza la misma instancia de Bd
    $link = new Bd;
    $user = new Usuario($nombre, $apellido, $email, $pwd);

    // Asegúrate de pasar el objeto $link a la función modificar
    // $cliente->modificar($link);
    if ($user->modificar($link, $id_usuario)) {
        $response = array(
            'nombre' => $nombre,
            'apellido' => $apellido,
            'email' => $email,
            'pwd' => $pwd,
        );

        echo json_encode($response);
        echo ("<br><a href='../../index.php'>Volver</a>");
    } else {
        echo json_encode(array('error' => 'Va mal'));

    }
}
