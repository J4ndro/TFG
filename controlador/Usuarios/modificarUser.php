<?php
require "../../modelo/Usuario.php";
$body = file_get_contents("php://input");
$data = json_decode($body);

// Obtener el nombre de usuario de los datos recibidos
$id_usuario = $data->id_usuario;
$nombre = $data->nombre;
$apellido = $data->apellido;
$email = $data->email;
$pwd = $data->pwd;

// Lógica para obtener los datos necesarios (por ejemplo, desde la base de datos)
$link = new Bd;
$user = new Usuario($nombre, $apellido, $email, $pwd);

if ($user->modificar($link, $id_usuario)) {
    $response = array(
        'nombre' => $nombre,
        'apellido' => $apellido,
        'email' => $email,
        'pwd' => $pwd,
    );

    echo json_encode($response);
    echo "<script>window.location.href='../../index.html?username=$email#!Perfil';</script>";

}

// Devolver los datos en formato JSON
header('Content-Type: application/json');
echo json_encode($lineasArray);
