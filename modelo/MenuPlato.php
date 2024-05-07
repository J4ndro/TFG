<?php

require "BD.php";
class MenuPlato
{
    private $id_menu;
    private $id_plato;
    function __construct($id_menu, $id_plato)
    {
        $this->id_menu = $id_menu;
        $this->id_plato = $id_plato;
    }

    static function getAll($link)
    {
        try {
            $consulta = "SELECT m.nombre AS nombre_menu, m.descripcion AS descripcion_menu, m.complejidad,
            p.nombre AS nombre_plato, p.ingredientes, p.calorias, p.proteinas, p.carbohidratos, p.grasas, p.descripcion AS descripcion_plato
            FROM Menus m
            INNER JOIN MenuPlato mp ON m.id_menu = mp.id_menu
            INNER JOIN Platos p ON mp.id_plato = p.id_plato;";
            $result = $link->prepare($consulta);
            $result->execute();
            return $result;
        } catch (PDOException $e) {
            $dato = "¡Error!: " . $e->getMessage() . "<br/>";
            die();
        }
    }

    static function listarMenusUsuarios($link)
    {
        try {
            $consulta = "SELECT U.*, M.*
                         FROM Usuarios U
                         JOIN MenuUsuario MU ON U.id_usuario = MU.id_usuario
                         JOIN Menus M ON MU.id_menu = M.id_menu";
            $result = $link->prepare($consulta);
            $result->execute();
            return $result->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            echo "¡Error!: " . $e->getMessage() . "<br/>";
            die();
        }
    }
    
    static function buscar($link, $id_menu)
    {
        try {
            $consulta = "SELECT p.nombre AS nombre_plato, p.ingredientes, p.calorias, p.proteinas, p.carbohidratos, p.grasas, p.descripcion AS descripcion_plato
            FROM Platos p
            INNER JOIN MenuPlato mp ON p.id_plato = mp.id_plato
            WHERE mp.id_menu = $id_menu;
            ";
            $result = $link->prepare($consulta);
            $result->bindParam(':id_menu', $id_menu);
            $result->execute();
            return $result;
        } catch (PDOException $e) {
            $dato = "¡Error!: " . $e->getMessage() . "<br/>";
            die();
        }
    }

   /*  function buscar($link)
    {
        try {
            $consulta = "SELECT * FROM CaracteristicasUsuarios where id_usuario='$this->id_usuario'";
            $link = $link->getLink();
            $result = $link->prepare($consulta);
            $result->execute();
            return $result->fetch(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            $dato = "¡Error!: " . $e->getMessage() . "<br/>";
            require "vistas/mensaje.php";
            die();
        }
    } */

    function insertar($link)
    {
        try {
            $consulta = "INSERT INTO MenuPlato VALUES (:id_menu, :id_plato)";
            $link = $link->getLink();
            $result = $link->prepare($consulta);
            $result->bindParam(':id_menu', $this->id_menu);
            $result->bindParam(':id_plato', $this->id_plato);
            $result->execute();
            return $result;
        } catch (PDOException $e) {
            $dato = "¡Error!: " . $e->getMessage() . "<br/>";
            require "../../vistas/mensaje.php";
            die();
        }
    }

    function borrar($link)
    {
        try {
            $consulta = "DELETE FROM MenuPlato where id_menu='$this->id_menu'";
            $result = $link->link->prepare($consulta);
            $result->execute();
            return $result->fetch(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            $dato = "¡Error!: " . $e->getMessage() . "<br/>";
            require "vistas/mensaje.php";
            die();
        }
    }

    function modificar($link)
    {
        try {
            $update = "UPDATE MenuPlato SET id_plato = :id_plato, WHERE id_menu = :id_menu";

            $stmnt = $link->link->prepare($update);
            $stmnt->execute([
                ':id_usuario' => $this->id_usuario,
                ':id_menu' => $this->id_menu,

            ]);

            return $stmnt;
        } catch (PDOException $e) {
            echo "Error en la actualización: " . $e->getMessage();
            die();
        }
    }


    function lista($conexion, $tabla, $campoclave, $campoamostrar)
    {
        try {
            $html = "<select name=\"$campoclave\">\n";
            $consulta = "SELECT $campoclave, $campoamostrar FROM $tabla";
            $stmnt = $conexion->prepare($consulta);
            $stmnt->execute();
            $resultados = $stmnt->fetchAll(PDO::FETCH_ASSOC);

            foreach ($resultados as $fila) {
                $clave = $fila[$campoclave];
                $valor = $fila[$campoamostrar];
                $html .= "<option value=\"$clave\">$valor</option>\n";
            }

            $html .= "</select>\n";
            return $html;
        } catch (PDOException $e) {
            echo 'Error al construir la lista: ' . $e->getMessage();
        }
    }


}