<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../../css/main_style.css">
</head>

<body>
    <nav>
        <aside>
            <h2> <a href="../../index.php" class="navs"> Gestion Clientes</a></h2>
        </aside>
        <aside>
            <h2><a href="../Productos/mostrarProductos.php" class="navs">Gestion Productos</a></h2>
        </aside>
        <aside>
            <h2><a href="" class="navs">Gestion Pedidos</a></h2>
        </aside>
    </nav>

    <?php
    include '../../vistas/inicio.html';
    require "../../modelo/Pedidos.php";
    require "../../modelo/Lineapedidos.php";
    require "../../modelo/Productos.php";

    $link = new Bd;
    $dato = Pedidos::getAll($link->link);

    echo '<table>';
    echo '<tr><th>ID Pedido</th><th>Fecha</th></tr>';

    while ($fila = $dato->fetch(PDO::FETCH_ASSOC)) {
        echo '<tr>';
        echo '<td>' . $fila['idPedido'] . '</td>';
        echo '<td>' . $fila['fecha'] . '</td>';
        echo "<td><a href='controlador/Clientes/detalle.php?dniCliente={$fila['dniCliente']}' target='_blank'>Detalle</a></td>";
        echo "<td><a href='controlador/Clientes/borrar.php?dniCliente={$fila['dniCliente']}' target='_blank'>Borrar</a></td>";
        echo "<td><a href='vistas/Cliente/form-modificar.php?dniCliente={$fila['dniCliente']}' target='_blank'>Modificar</a></td>";
        echo '</tr>';

        $datol = Linea::getAll($link->link, $fila['idPedido']);

        while ($fila2 = $datol->fetch(PDO::FETCH_ASSOC)) {
            echo '<tr><td></td>';

            $datop = Productos::getID($link->link, $fila2['idProducto']);
            while ($fila3 = $datop->fetch(PDO::FETCH_ASSOC)) {
                echo '<td>' . $fila3['nombre'] . '</td>';
                echo '<td>' . $fila2['cantidad'] . '</td>';
                echo '<td>' . $fila3['precio'] . '€</td>';
                echo '<td>' . $fila3['precio'] * $fila2['cantidad'] . '€</td>';
                echo "<td><a href='controlador/Clientes/detalle.php?dniCliente={$fila['dniCliente']}' target='_blank'>Detalle</a></td>";
                echo "<td><a href='controlador/Clientes/borrar.php?dniCliente={$fila['dniCliente']}' target='_blank'>Borrar</a></td>";
                echo "<td><a href='vistas/Cliente/form-modificar.php?dniCliente={$fila['dniCliente']}' target='_blank'>Modificar</a></td>";
            }
            echo '</tr>';
        }
    }
    include '../../vistas/fin.html';
    ?>
</body>

</html>