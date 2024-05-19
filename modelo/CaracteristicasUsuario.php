<?php

require "BD.php";
class CaracteristicasUsuario
{
    private $id_usuario;
    private $calorias;
    private $proteinas;
    private $carbohidratos;
    private $grasas;
    private $altura;
    private $peso;
    private $edad;

    function __construct($altura, $peso, $edad)
    {
        $this->altura = $altura;
        $this->peso = $peso;
        $this->edad = $edad;
    }

    static function getAll($link)
    {
        try {
            $consulta = "SELECT * FROM CaracteristicasUsuarios";
            $result = $link->prepare($consulta);
            $result->execute();
            return $result->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            echo "¡Error!: " . $e->getMessage() . "<br/>";
            die();
        }
    }

    static function getAllID($link, $id_usuario)
    {
        try {
            $consulta = "SELECT * FROM CaracteristicasUsuarios WHERE id_usuario='$id_usuario'";
            $result = $link->prepare($consulta);
            // $result->bindParam(':id_usuario', $id_usuario);
            $result->execute();
            return $result;
        } catch (PDOException $e) {
            $dato = "¡Error!: " . $e->getMessage() . "<br/>";
            die();
        }
    }
    static function buscar($link, $id_usuario)
    {
        try {
            $consulta = "SELECT * FROM CaracteristicasUsuarios WHERE id_usuario = :id_usuario";
            $result = $link->prepare($consulta);
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
            $consulta = "INSERT INTO CaracteristicasUsuarios ( calorias, proteinas, carbohidratos, grasas, altura, peso, edad) 
                         VALUES ( :calorias, :proteinas, :carbohidratos, :grasas, :altura, :peso, :edad)";
            $result = $link->link->prepare($consulta);
            $result->bindParam(':calorias', $this->calorias, PDO::PARAM_INT);
            $result->bindParam(':proteinas', $this->proteinas, PDO::PARAM_INT);
            $result->bindParam(':carbohidratos', $this->carbohidratos, PDO::PARAM_INT);
            $result->bindParam(':grasas', $this->grasas, PDO::PARAM_INT);
            $result->bindParam(':altura', $this->altura, PDO::PARAM_INT);
            $result->bindParam(':peso', $this->peso, PDO::PARAM_INT);
            $result->bindParam(':edad', $this->edad, PDO::PARAM_INT);
            $result->execute();
            return $result;
        } catch (PDOException $e) {
            echo "¡Error!: " . $e->getMessage() . "<br/>";
            die();
        }
    }

    function modificar($link,$id_usuario)
    {
        try {
            $consulta = "UPDATE CaracteristicasUsuarios SET altura = :altura, peso = :peso, edad = :edad WHERE id_usuario = '$id_usuario'";
            $stmnt = $link->link->prepare($consulta);
            $stmnt->execute([
                ':altura' => $this->altura,
                ':peso' => $this->peso,
                ':edad' => $this->edad,
            ]);

            return $stmnt;
        } catch (PDOException $e) {
            echo "Error en la actualización: " . $e->getMessage();
            die();
        }
    }

    function borrar($link)
    {
        try {
            $consulta = "DELETE FROM CaracteristicasUsuarios WHERE id_usuario = :id_usuario";
            $result = $link->prepare($consulta);
            $result->bindParam(':id_usuario', $this->id_usuario, PDO::PARAM_INT);
            $result->execute();
            return $result->rowCount(); // Retorna la cantidad de filas afectadas
        } catch (PDOException $e) {
            echo "¡Error!: " . $e->getMessage() . "<br/>";
            die();
        }
    }
}
