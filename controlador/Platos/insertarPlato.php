<?php
require "../../modelo/Platos.php";

// Verifica si se recibieron datos del formulario
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Recibe los datos del formulario
    $nombre = isset($_POST['nombre']) ? $_POST['nombre'] : '';
    $ingredientes = isset($_POST['ingredientes']) ? $_POST['ingredientes'] : '';
    $foto = isset($_POST['foto']) ? $_POST['foto'] : '';
    $calorias = isset($_POST['calorias']) ? $_POST['calorias'] : '';
    $proteinas = isset($_POST['proteinas']) ? $_POST['proteinas'] : '';
    $carbohidratos = isset($_POST['carbohidratos']) ? $_POST['carbohidratos'] : '';
    $grasas = isset($_POST['grasas']) ? $_POST['grasas'] : '';
    $descripcion = isset($_POST['descripcion']) ? $_POST['descripcion'] : '';
    $complejidad = isset($_POST['complejidad']) ? $_POST['complejidad'] : '';

    // Crear una instancia de Usuario con los datos recibidos
    $plato = new Platos($nombre, $ingredientes, $foto, $calorias, $proteinas, $carbohidratos, $grasas, $descripcion, $complejidad);
    $link = new Bd;
    var_dump($plato);
    // Intenta insertar el usuario en la base de datos
    if ($plato->insertar($link)) {
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
        // Si ocurre un error al insertar, devuelve un mensaje de error en formato JSON
        echo json_encode(array('error' => 'Error al insertar el usuario'));
    }
} else {
    // Si la solicitud no es un POST, devuelve un mensaje de error en formato JSON
    echo json_encode(array('error' => 'Solicitud incorrecta'));
}
