<?php
require "../../modelo/Platos.php";

header('Content-Type: application/json; charset=utf-8');

try {
    // Verifica si se recibieron datos del formulario
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        // Recibe los datos del formulario en formato JSON
        $data = json_decode(file_get_contents("php://input"), true);

        if (json_last_error() !== JSON_ERROR_NONE) {
            throw new Exception('Invalid JSON input: ' . json_last_error_msg());
        }

        // Extrae los valores del JSON
        $nombre = isset($data['name']) ? $data['name'] : '';
        $ingredientes = isset($data['ingredientes']) ? $data['ingredientes'] : '';
        $foto = isset($data['foto']) ? $data['foto'] : '';
        $calorias = isset($data['calorias']) ? $data['calorias'] : '';
        $proteinas = isset($data['proteinas']) ? $data['proteinas'] : '';
        $carbohidratos = isset($data['carbohidratos']) ? $data['carbohidratos'] : '';
        $grasas = isset($data['grasas']) ? $data['grasas'] : '';
        $descripcion = isset($data['descripcion']) ? $data['descripcion'] : '';
        $complejidad = isset($data['complejidad']) ? $data['complejidad'] : '';
        $id_usuario = isset($data['id_usuario']) ? $data['id_usuario'] : '';

        // Crear una instancia de Usuario con los datos recibidos
        $plato = new Platos($nombre, $ingredientes, $foto, $calorias, $proteinas, $carbohidratos, $grasas, $descripcion, $complejidad);
        $link = new Bd;

        // Intenta insertar el usuario en la base de datos
        if ($plato->insertarUser($link, $id_usuario)) {
            // Si se inserta correctamente, devuelve los datos del usuario como respuesta en formato JSON
            $response = array(
                'nombre' => $nombre,
                'ingredientes' => $ingredientes,
                'foto' => $foto,
                'calorias' => $calorias,
                'proteinas' => $proteinas,
                'carbohidratos' => $carbohidratos,
                'grasas' => $grasas,
                'descripcion' => $descripcion,
                'complejidad' => $complejidad
            );
            echo json_encode($response);
        } else {
            throw new Exception('Error al insertar el usuario');
        }
    } else {
        throw new Exception('Solicitud incorrecta');
    }
} catch (Exception $e) {
    echo json_encode(array('error' => $e->getMessage()));
}

