<?php
class MenuUsuario
{
    private $id_menu;
    private $id_usuario;

    function __construct($id_menu, $id_usuario)
    {
        $this->id_menu = $id_menu;
        $this->id_usuario = $id_usuario;
    }

    static function getAll($link)
    {
        try {
            $consulta = "SELECT * FROM MenuUsuario";
            $result = $link->prepare($consulta);
            $result->execute();
            return $result->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            echo "¡Error!: " . $e->getMessage() . "<br/>";
            die();
        }
    }

    static function buscar($link, $id_menu, $id_usuario)
    {
        try {
            $consulta = "SELECT * FROM MenuUsuario WHERE id_menu = :id_menu AND id_usuario = :id_usuario";
            $result = $link->prepare($consulta);
            $result->bindParam(':id_menu', $id_menu, PDO::PARAM_INT);
            $result->bindParam(':id_usuario', $id_usuario, PDO::PARAM_INT);
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
            $consulta = "INSERT INTO MenuUsuario (id_menu, id_usuario) VALUES (:id_menu, :id_usuario)";
            $result = $link->prepare($consulta);
            $result->bindParam(':id_menu', $this->id_menu, PDO::PARAM_INT);
            $result->bindParam(':id_usuario', $this->id_usuario, PDO::PARAM_INT);
            $result->execute();
            return $result;
        } catch (PDOException $e) {
            echo "¡Error!: " . $e->getMessage() . "<br/>";
            die();
        }
    }

    function modificar($link, $nuevo_id_usuario)
    {
        try {
            $consulta = "UPDATE MenuUsuario SET id_usuario = :nuevo_id_usuario WHERE id_menu = :id_menu";
            $result = $link->prepare($consulta);
            $result->bindParam(':nuevo_id_usuario', $nuevo_id_usuario, PDO::PARAM_INT);
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
            $consulta = "DELETE FROM MenuUsuario WHERE id_menu = :id_menu AND id_usuario = :id_usuario";
            $result = $link->prepare($consulta);
            $result->bindParam(':id_menu', $this->id_menu, PDO::PARAM_INT);
            $result->bindParam(':id_usuario', $this->id_usuario, PDO::PARAM_INT);
            $result->execute();
            return $result->rowCount(); // Retorna la cantidad de filas afectadas
        } catch (PDOException $e) {
            echo "¡Error!: " . $e->getMessage() . "<br/>";
            die();
        }
    }
}
