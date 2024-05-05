<?php
require "../../modelo/Pedidos.php";
require "../../modelo/BD.php";
var_dump($_POST);

if (isset($_POST['idPedido'])) {
    $idPedido = $_POST['idPedido'];
    $fecha = isset($_POST['fecha']) ? $_POST['fecha'] : "";
    $dirEntrega = isset($_POST['dirEntrega']) ? $_POST['dirEntrega'] : "";
    $nTarjeta = isset($_POST['nTarjeta']) ? $_POST['nTarjeta'] : "";
    $fechaCaducidad = isset($_POST['fechaCaducidad']) ? $_POST['fechaCaducidad'] : "";
    $matriculaRepartidor = isset($_POST['matriculaRepartidor']) ? $_POST['matriculaRepartidor'] : "";
    $dniCliente = isset($_POST['dniCliente']) ? $_POST['dniCliente'] : "";

    var_dump($_POST);
    $link = new Bd;
    $pedidos = new Pedidos($_POST['idPedido'], $_POST['fecha'], $_POST['dirEntrega'], $_POST['nTarjeta'], $_POST['fechaCaducidad'], $_POST['matriculaRepartidor'], $_POST['dniCliente']);

    if ($pedidos->buscar($link)) {

        $dato = "El productos ya existe<br>";
        $dato .= "<a href='mostrarProductos.php'>Volver</a>";
        require "../../vistas/mensaje.php";
    } else if ($pedidos->insertar($link)) {
        $response = array(
            'idPedido' => $idPedido,
            'fecha' => $fecha,
            'dirEntrega' => $dirEntrega,
            'nTarjeta' => $nTarjeta,
            'fechaCaducidad' => $fechaCaducidad,
            'matriculaRepartidor' => $matriculaRepartidor,
            'dniCliente' => $dniCliente
        );
        echo json_encode($response);
    } else {
        echo json_encode(array('error' => 'Va mal'));
    }

}