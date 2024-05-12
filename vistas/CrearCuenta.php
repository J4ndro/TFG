<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="../css/login.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous" />
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
</head>

<body>
    <div class="wrapper">
        <form class="login" action="../controlador/login/Crear.php" method="post">
            <p class="title">Crear Cuenta</p>
            <input type="text" placeholder="Nombre" autofocus id="nombre" name="nombre" required />
            <i class="fa fa-user"></i>
            <input type="text" placeholder="Apellidos" id="apellido" name="apellido" required />
            <i class="fa fa-key"></i>
            <input type="email" placeholder="Email" id="email" name="email" required />
            <i class="fa fa-key"></i>
            <input type="password" placeholder="Contraseña" id="pwd" name="pwd" required />
            <i class="fa fa-key"></i>

            <button>
                <i class="spinner"></i>
                <span class="state">Crear Cuenta</span>
            </button>
        </form>
</body>



<?php
// include 'vistas/inicio.html';
// require 'controlador/Clientes/mostrar.php';
// include 'vistas/fin.html';
?>

</html>