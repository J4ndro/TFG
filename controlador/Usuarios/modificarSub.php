<?php
require "../../modelo/Usuario.php";
$body = file_get_contents("php://input");
$data = json_decode($body);

// Verificar datos recibidos
file_put_contents('php://stderr', print_r($data, true));

$id_usuario = $data->id_usuario;
$precio = $data->precio;

$suscripcion = ($precio == "9.95") ? "1" : "2";

// Verificar valores calculados
file_put_contents('php://stderr', print_r("Usuario: $id_usuario, Suscripción: $suscripcion\n", true));

$link = new Bd();
$result = Usuario::modificarSub($link->link, $id_usuario, $suscripcion);

if ($result) {
    file_put_contents('php://stderr', "Actualización exitosa\n");
} else {
    file_put_contents('php://stderr', "Error en la actualización\n");
}

header('Content-Type: application/json');
echo json_encode(["success" => $result]);

