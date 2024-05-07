<?php
require "../../modelo/Usuario.php";

// Verifica si se recibieron datos del formulario
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Recibe los datos del formulario
    $id_usuario = isset($_POST['id_usuario']) ? $_POST['id_usuario'] : '';
    $calorias = isset($_POST['calorias']) ? $_POST['calorias'] : '';
    $proteinas = isset($_POST['proteinas']) ? $_POST['proteinas'] : '';
    $carbohidratos = isset($_POST['carbohidratos']) ? $_POST['carbohidratos'] : '';
    $grasas = isset($_POST['grasas']) ? $_POST['grasas'] : '';
    $altura = isset($_POST['altura']) ? $_POST['altura'] : '';
    $peso = isset($_POST['peso']) ? $_POST['peso'] : '';
    $edad = isset($_POST['edad']) ? $_POST['edad'] : '';

    // Crear una instancia de Usuario con los datos recibidos
    $user = new CaracteristicasUsuario($id_usuario, $calorias, $proteinas, $carbohidratos, $grasas, $altura, $peso, $edad);
    $link = new Bd;

    // Intenta insertar el usuario en la base de datos
    if ($user->insertar($link)) {
        // Si se inserta correctamente, devuelve los datos del usuario como respuesta en formato JSON
        $response = array(
            'calorias' => $calorias,
            'proteinas' => $proteinas,
            'carbohidratos' => $carbohidratos,
            'grasas' => $grasas,
            'altura' => $altura,
            'peso' => $peso,
            'edad' => $edad
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
