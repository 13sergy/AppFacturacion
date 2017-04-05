<?php
// Incluir el archivo de base de datos
include_once("../clases/class.Database.php");

if( isset($_GET["pag"])){
	$pagina=$_GET["pag"];
}else{
	$pagina=1;
}

$respuesta = Database::get_todo_paginado('clientes',$pagina);

echo json_encode($respuesta);
?>