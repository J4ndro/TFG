<?php
class Bd
{
	private $link;
	function __construct()
	{

		try {
			$opciones = array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8", PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, PDO::ATTR_PERSISTENT => true);
			$this->link = new PDO('mysql:dbname=Vita;host=30ad39bb576a:3306', 'root', '1234');
		} catch (PDOException $e) {
			$dato = "¡Error!: " . $e->getMessage() . "<br/>";
			require "vistas/mensaje.php";
			die();
		}

	}

	function __get($var)
	{
		return $this->$var;
	}
	public function getLink()
	{
		return $this->link;
	}
	function iniciarTransaccion($conexion)
	{
		$conexion->beginTransaction();
	}

	function confirmarTransaccion($conexion)
	{
		$conexion->commit();
	}

	function cancelarTransaccion($conexion)
	{
		$conexion->rollBack();
	}
}