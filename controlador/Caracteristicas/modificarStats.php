<?php
require "../../modelo/CaracteristicasUsuario.php";


if (isset($_POST['id_usuario'])) {
    var_dump($_POST);
    $id_usuario = $_POST['id_usuario'];
    $calorias = $_POST['calorias'];
    $proteinas = $_POST['proteinas'];
    $carbohidratos = $_POST['carbohidratos'];
    $grasas = $_POST['grasas'];
    $altura = $_POST['altura'];
    $peso = $_POST['peso'];
    $edad = $_POST['edad'];

    // Utiliza la misma instancia de Bd
    $link = new Bd;
    $user = new CaracteristicasUsuario($id_usuario, $calorias, $proteinas, $carbohidratos, $grasas, $altura);

    // Asegúrate de pasar el objeto $link a la función modificar
    // $user->modificar($link);
    if ($user->modificar($link)) {
        $response = array(
            'dni' => $id_usuario,
            'calorias' => $calorias,
            'proteinas' => $proteinas,
            'carbohidratos' => $carbohidratos,
            'grasas' => $grasas,
            'altura' => $altura,
            'peso' => $peso,
            'edad' => $edad
        );

        echo json_encode($response);
        echo ("<br><a href='../../index.php'>Volver</a>");
    } else {
        echo json_encode(array('error' => 'Va mal'));

    }
}
