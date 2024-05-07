<?php
require "../../modelo/Platos.php";


if (isset($_POST['id_plato'])) {
    var_dump($_POST);
    $id_plato = $_POST['id_plato'];
    $nombre = $_POST['nombre'];
    $ingredientes = $_POST['ingredientes'];
    $foto = $_POST['foto'];
    $calorias = $_POST['calorias'];
    $proteinas = $_POST['proteinas'];
    $carbohidratos = $_POST['carbohidratos'];
    $grasas = $_POST['grasas'];
    $descripcion = $_POST['descripcion'];

    // Utiliza la misma instancia de Bd
    $link = new Bd;
    $plato = new Platos($nombre, $ingredientes, $foto, $calorias, $proteinas, $carbohidratos, $grasas, $descripcion);

    // Asegúrate de pasar el objeto $link a la función modificar
    // $cliente->modificar($link);
    if ($plato->modificar($link, $id_plato)) {
        $response = array(
            'nombre' => $nombre,
            'ingredientes' => $ingredientes,
            'foto' => $foto,
            'calorias' => $calorias,
            'proteinas' => $proteinas,
            'carbohidratos' => $carbohidratos,
            'grasas' => $grasas,
            'descripcion' => $descripcion,
        );

        echo json_encode($response);
        echo ("<br><a href='../../index.php'>Volver</a>");
    } else {
        echo json_encode(array('error' => 'Va mal'));

    }
}
