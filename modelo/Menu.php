<?php
require "BD.php";
class Menu
{
    private $id_menu;
    private $nombre;
    private $descripcion;

    function __construct($nombre, $descripcion)
    {
        $this->nombre = $nombre;
        $this->descripcion = $descripcion;
    }

    static function getAll($link)
    {
        try {
            $consulta = "SELECT * FROM Menus";
            $result = $link->prepare($consulta);
            $result->execute();
            return $result;
        } catch (PDOException $e) {
            $dato = "¡Error!: " . $e->getMessage() . "<br/>";
            die();
        }
    }

    static function getAllID($link, $id_menu)
    {
        try {
            $consulta = "SELECT * FROM Menus WHERE id_menu=:id_menu";
            $result = $link->prepare($consulta);
            $result->bindParam(':id_menu', $id_menu);
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
            $consulta = "SELECT * FROM Menus WHERE id_menu = :id_menu";
            $result = $link->prepare($consulta);
            $result->bindParam(':id_menu', $id_menu, PDO::PARAM_INT);
            $result->execute();
            return $result->fetch(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            echo "¡Error!: " . $e->getMessage() . "<br/>";
            die();
        }
    }

    function insertar($link)
    {
        try {
            $consulta = "INSERT INTO Menus (nombre, descripcion) 
                         VALUES (:nombre, :descripcion)";
            $result = $link->link->prepare($consulta);
            $result->bindParam(':nombre', $this->nombre);
            $result->bindParam(':descripcion', $this->descripcion);
            $result->execute();
            return $result;
        } catch (PDOException $e) {
            echo "¡Error!: " . $e->getMessage() . "<br/>";
            die();
        }
    }

    function modificar($link)
    {
        try {
            $consulta = "UPDATE Menus SET nombre = :nombre, descripcion = :descripcion, 
                           WHERE id_menu = :id_menu";
            $result = $link->prepare($consulta);
            $result->bindParam(':nombre', $this->nombre);
            $result->bindParam(':descripcion', $this->descripcion);
            $result->bindParam(':id_menu', $this->id_menu, PDO::PARAM_INT);
            $result->execute();
            return $result;
        } catch (PDOException $e) {
            echo "¡Error!: " . $e->getMessage() . "<br/>";
            die();
        }
    }

    function eliminar($link)
    {
        try {
            $consulta = "DELETE FROM Menus WHERE id_menu = :id_menu";
            $result = $link->prepare($consulta);
            $result->bindParam(':id_menu', $this->id_menu, PDO::PARAM_INT);
            $result->execute();
            return $result->rowCount(); // Retorna la cantidad de filas afectadas
        } catch (PDOException $e) {
            echo "¡Error!: " . $e->getMessage() . "<br/>";
            die();
        }
    }
}
