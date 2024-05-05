<?php

require "BD.php";
class Usuario
{
    private $id_usuario;
    private $nombre;
    private $apellido;
    private $email;
    private $pwd;
    private $administrador;
    function __construct($id_usuario, $nombre, $apellido, $email, $pwd, $administrador)
    {
        $this->id_usuario = $id_usuario;
        $this->nombre = $nombre;
        $this->apellido = $apellido;
        $this->email = $email;
        $this->pwd = $pwd;
        $this->administrador = $administrador;
    }

    static function getAll($link)
    {
        try {
            $consulta = "SELECT * FROM Usuarios";
            $result = $link->prepare($consulta);
            $result->execute();
            return $result;
        } catch (PDOException $e) {
            $dato = "¡Error!: " . $e->getMessage() . "<br/>";
            die();
        }
    }
    static function getAllID($link, $id_usuario)
    {
        try {
            $consulta = "SELECT * FROM Usuarios WHERE id_usuario=:id_usuario";
            $result = $link->prepare($consulta);
            $result->bindParam(':id_usuario', $id_usuario);
            $result->execute();
            return $result;
        } catch (PDOException $e) {
            $dato = "¡Error!: " . $e->getMessage() . "<br/>";
            die();
        }
    }

    function buscar($link)
    {
        try {
            $consulta = "SELECT * FROM Usuarios where id_usuario='$this->id_usuario'";
            $link = $link->getLink();
            $result = $link->prepare($consulta);
            $result->execute();
            return $result->fetch(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            $dato = "¡Error!: " . $e->getMessage() . "<br/>";
            require "vistas/mensaje.php";
            die();
        }
    }

    function buscarUsuario($link)
    {
        try {
            $consulta = "SELECT * FROM Usuarios where email='$this->email' and pwd='$this->pwd'";
            $link = $link->getLink();
            $result = $link->prepare($consulta);
            $result->execute();
            return $result->fetch(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            $dato = "¡Error!: " . $e->getMessage() . "<br/>";
            require "vistas/mensaje.php";
            die();
        }
    }
    function insertar($link)
    {
        try {
            $consulta = "INSERT INTO Usuarios VALUES (:id_usuario,:nombre,:apellido,:email,:pwd,:administrador)";
            $link = $link->getLink();
            $result = $link->prepare($consulta);
            $result->bindParam(':id_usuario', $this->id_usuario);
            $result->bindParam(':nombre', $this->nombre);
            $result->bindParam(':apellido', $this->apellido);
            $result->bindParam(':email', $this->email);
            $result->bindParam(':pwd', $this->pwd);
            $result->bindValue(':administrador', $this->administrador == 1 ? "true" : "false");

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
            $consulta = "DELETE FROM Usuarios where id_usuario='$this->id_usuario'";
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
            $update = "UPDATE Usuarios SET nombre = :nombre, apellido = :apellido, email = :email, pwd = :pwd, administrador = :administrador WHERE id_usuario = :id_usuario";

            $stmnt = $link->link->prepare($update);
            $stmnt->execute([
                ':id_usuario' => $this->id_usuario,
                ':nombre' => $this->nombre,
                ':apellido' => $this->apellido,
                ':email' => $this->email,
                ':pwd' => $this->pwd,
                ':administrador' => $this->administrador
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