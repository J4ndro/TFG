<?php
require "../../modelo/CaracteristicasUsuario.php";
$body = file_get_contents("php://input");
$data = json_decode($body);

$id_usuario = $data->id_usuario;
$altura = $data->altura;
$edad = $data->edad;
$peso = $data->peso;

// Lógica para obtener los datos necesarios (por ejemplo, desde la base de datos)
$link = new Bd;
$user = new CaracteristicasUsuario( $altura, $peso, $edad);

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

