<?php
require "../../modelo/Usuario.php";

// Obtener id del usuario del cuerpo de la solicitud
$body = file_get_contents("php://input");
$data = json_decode($body);

// Obtener id del usuario del cuerpo de la solicitud
$id = $data->id;

$link = new BD();
$user = new Usuario($id, "", "", "", "", "");

$resultado = $user->borrar($link);

// Retornar alguna respuesta, por ejemplo un JSON
echo json_encode(["success" => true]); // Puedes enviar más información si lo necesitas
