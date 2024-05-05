<?php
require "../../modelo/Usuario.php";

$body = file_get_contents("php://input");
$data = json_decode($body);

// Obtener dniCliente de la URL
$id = $data->id;

$link = new BD();
$user = new Usuario($id, "", "", "", "", "");

$resultado = $user->buscar($link);

// Configurar el encabezado de respuesta como JSON
header('Content-Type: application/json');

// Imprimir solo el JSON sin información adicional
echo json_encode($resultado);
