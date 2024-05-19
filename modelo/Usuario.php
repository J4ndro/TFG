<?php

require "BD.php";
class Usuario
{
    private $id_usuario;
    private $nombre;
    private $apellido;
    private $email;
    private $pwd;
    function __construct($nombre, $apellido, $email, $pwd)
    {
        $this->nombre = $nombre;
        $this->apellido = $apellido;
        $this->email = $email;
        $this->pwd = $pwd;
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
    static function getAllID($link, $email)
    {
        try {
            $consulta = "SELECT * FROM Usuarios WHERE email='$email'";
            $result = $link->prepare($consulta);
            // $result->bindParam(':email', $email);
            $result->execute();
            return $result;
        } catch (PDOException $e) {
            $dato = "¡Error!: " . $e->getMessage() . "<br/>";
            die();
        }
    }

    function buscar($link, $usuario)
    {
        try {
            $consulta = "SELECT * FROM Usuarios where id_usuario='$usuario'";
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
            $consulta = "INSERT INTO Usuarios (nombre, apellido, email, pwd, suscripcion) VALUES (:nombre, :apellido, :email, :pwd, 0)";
            $link = $link->getLink();
            $result = $link->prepare($consulta);
            $result->bindParam(':nombre', $this->nombre);
            $result->bindParam(':apellido', $this->apellido);
            $result->bindParam(':email', $this->email);
            $result->bindParam(':pwd', $this->pwd);

            $result->execute();
            return $result;
        } catch (PDOException $e) {
            $dato = "¡Error!: " . $e->getMessage() . "<br/>";
            require "../../vistas/mensaje.php";
            die();
        }
    }

    function borrar($link, $usuario)
    {
        try {
            $consulta = "DELETE FROM Usuarios where id_usuario='$usuario'";
            $result = $link->link->prepare($consulta);
            $result->execute();
            return $result->fetch(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            $dato = "¡Error!: " . $e->getMessage() . "<br/>";
            require "vistas/mensaje.php";
            die();
        }
    }

    function modificar($link, $id_usuario)
    {
        try {
            $update = "UPDATE Usuarios SET nombre = :nombre, apellido = :apellido, email = :email, pwd = :pwd WHERE id_usuario = '$id_usuario'";

            $stmnt = $link->link->prepare($update);
            $stmnt->execute([
                ':nombre' => $this->nombre,
                ':apellido' => $this->apellido,
                ':email' => $this->email,
                ':pwd' => $this->pwd,
            ]);

            return $stmnt;
        } catch (PDOException $e) {
            echo "Error en la actualización: " . $e->getMessage();
            die();
        }
    }


    static function modificarSub($link, $id_usuario, $sub) {
        try {
            $update = "UPDATE Usuarios SET suscripcion = :sub WHERE id_usuario = :id_usuario";
            $stmnt = $link->prepare($update);
            $stmnt->bindParam(':sub', $sub, PDO::PARAM_INT);
            $stmnt->bindParam(':id_usuario', $id_usuario, PDO::PARAM_STR);
            $stmnt->execute();
    
            // Verificar el número de filas afectadas
            $affectedRows = $stmnt->rowCount();
            if ($affectedRows > 0) {
                return true;
            } else {
                file_put_contents('php://stderr', "No se actualizó ninguna fila\n");
                return false;
            }
        } catch (PDOException $e) {
            file_put_contents('php://stderr', "Error en la actualización: " . $e->getMessage() . "\n");
            return false;
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