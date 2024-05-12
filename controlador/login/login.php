<?php
require "../../modelo/Usuario.php";
session_start();

// Verificar si el formulario ha sido enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Definir las credenciales de acceso (simuladas)
    $valid_username = "usuario";
    $valid_password = "contraseña";

    // Obtener los datos del formulario
    $username = $_POST['username'];
    $password = $_POST['password'];

    $user = new Usuario("", "", $username, $password);
    $bd = new Bd();
    // Verificar las credenciales
    if ($user->buscarUsuario($bd)) {
        // Iniciar sesión y redirigir al usuario a una página de inicio
        if ($username === "admin" && $password === "admin") {
            echo "<script>window.location.href='../../vistas/indexAdmin.html';</script>";
            exit;
        } else {
            $_SESSION['username'] = $username;
            echo "<script>window.location.href='../../vistas/index.html?username=$username';</script>";
            exit;
        }
    } else {
        // Si las credenciales son incorrectas, mostrar un mensaje de error
        echo "<script>window.location.href='../../../../TFG/index.php';</script>";
    }
}
