<?php
require "../../modelo/Cliente.php";


if (isset($_POST['dniCliente'])) {
    var_dump($_POST);
    $dniCliente = $_POST['dniCliente'];
    $nombre = $_POST['nombre'];
    $direccion = $_POST['direccion'];
    $email = $_POST['email'];
    $pwd = $_POST['pwd'];
    $administrador = isset($_POST['administrador']) ? 1 : 0;

    // Utiliza la misma instancia de Bd
    $link = new Bd;
    $cliente = new Cliente($dniCliente, $nombre, $direccion, $email, $pwd, $administrador);

    // Asegúrate de pasar el objeto $link a la función modificar
    // $cliente->modificar($link);
    if ($cliente->modificar($link)) {
        $response = array(
            'dni' => $dniCliente,
            'nombre' => $nombre,
            'direccion' => $direccion,
            'email' => $email,
            'pwd' => $pwd,
            'administrador' => $administrador
        );

        echo json_encode($response);
        echo ("<br><a href='../../index.php'>Volver</a>");
    } else {
        echo json_encode(array('error' => 'Va mal'));

    }
}
