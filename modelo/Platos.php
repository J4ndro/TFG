<?php
require "BD.php";
class Platos
{
	private $id_plato;
	private $nombre;
	private $ingredientes;
	private $foto;
	private $calorias;
	private $proteinas;
	private $carbohidratos;
	private $grasas;
	private $descripcion;

	function __construct($nombre, $ingredientes, $foto, $calorias, $proteinas, $carbohidratos, $grasas, $descripcion)
	{
		$this->nombre = $nombre;
		$this->ingredientes = $ingredientes;
		$this->foto = $foto;
		$this->calorias = $calorias;
		$this->proteinas = $proteinas;
		$this->carbohidratos = $carbohidratos;
		$this->grasas = $grasas;
		$this->descripcion = $descripcion;
	}

	public function getid_plato()
	{
		return $this->id_plato;
	}

	// Getter para obtener el nombre
	public function getNombre()
	{
		return $this->nombre;
	}

	static function getAll($link)
	{
		try {
			$consulta = "SELECT * FROM Platos";
			$result = $link->prepare($consulta);
			$result->execute();
			return $result;
		} catch (PDOException $e) {
			$dato = "¡Error!: " . $e->getMessage() . "<br/>";
			die();
		}
	}

	static function getID($link, $id)
	{
		try {
			$consulta = "SELECT * FROM Platos WHERE id_plato=:id_plato";
			$result = $link->prepare($consulta);
			$result->bindParam(':id_plato', $id);
			$result->execute();
			return $result;
		} catch (PDOException $e) {
			$dato = "¡Error!: " . $e->getMessage() . "<br/>";
			die();
		}
	}
	static function get($link, $id)
	{
		try {
			$consulta = "SELECT * FROM Platos WHERE id_plato=:id_plato";
			$result = $link->link->prepare($consulta);
			$result->bindParam(':id_plato', $id);
			$result->execute();
			return $result->fetch(PDO::FETCH_ASSOC);
		} catch (PDOException $e) {
			$dato = "¡Error!: " . $e->getMessage() . "<br/>";
			die();
		}
	}
	function buscar($link, $id_plato)
	{
		try {
			$consulta = "SELECT * FROM Platos where id_plato='$id_plato'";
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
			$consulta = "INSERT INTO Platos(nombre,ingredientes,foto,calorias,proteinas,carbohidratos,grasas,descripcion) 
			VALUES (:nombre, :ingredientes, :foto, :calorias, :proteinas, :carbohidratos, :grasas, :descripcion)";
			$link = $link->getLink();
			$result = $link->prepare($consulta);
			$result->bindParam(':nombre', $this->nombre);
			$result->bindParam(':ingredientes', $this->ingredientes);
			$result->bindParam(':foto', $this->foto);
			$result->bindParam(':calorias', $this->calorias);
			$result->bindParam(':proteinas', $this->proteinas);
			$result->bindParam(':carbohidratos', $this->carbohidratos);
			$result->bindParam(':grasas', $this->grasas);
			$result->bindParam(':descripcion', $this->descripcion);

			$result->execute();
			return $result;
		} catch (PDOException $e) {
			$dato = "¡Error!: " . $e->getMessage() . "<br/>";
			require "../../vistas/mensaje.php";
			die();
		}
	}

	function borrar($link, $id_plato)
	{
		try {
			$consulta = "DELETE FROM Platos where id_plato='$id_plato'";
			$result = $link->link->prepare($consulta);
			$result->execute();
			return $result->fetch(PDO::FETCH_ASSOC);
		} catch (PDOException $e) {
			$dato = "¡Error!: " . $e->getMessage() . "<br/>";
			require "vistas/mensaje.php";
			die();
		}
	}

	function modificar($link, $id_plato)
	{
		try {
			$update = "UPDATE Platos SET nombre = :nombre, ingredientes = :ingredientes, foto = :foto, calorias = :calorias, proteinas = :proteinas, carbohidratos = :carbohidratos, grasas = :grasas, descripcion = :descripcion WHERE id_plato = '$id_plato'";

			$stmnt = $link->link->prepare($update);
			$stmnt->execute([
				':nombre' => $this->nombre,
				':ingredientes' => $this->ingredientes,
				':foto' => $this->foto,
				':calorias' => $this->calorias,
				':proteinas' => $this->proteinas,
				':carbohidratos' => $this->carbohidratos,
				':grasas' => $this->grasas,
				':descripcion' => $this->descripcion,
			]);

			return $stmnt;
		} catch (PDOException $e) {
			echo "Error en la actualización: " . $e->getMessage();
			die();
		}
	}

}