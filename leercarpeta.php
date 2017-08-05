<?php 
error_reporting(E_ALL);
ini_set('display_errors', 1);

//CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json");

$rutaBase = '../archivos';
$ficheros = scandir($rutaBase);
$resultados = [];
foreach ($ficheros as $fichero => $valor) {
	$infoArchivo=[];
	$infoArchivo['nombre'] = $valor;
	$infoArchivo['tipo'] = filetype($rutaBase.'/'.$valor);
	$infoArchivo['extension']= obtenerExtension($rutaBase.'/'.$valor);
	//$infoArchivo['tamaño']= filesize($rutaBase.'/'.$valor);
	$infoArchivo['tamaño']= convertirBytes(filesize($rutaBase.'/'.$valor));
	$infoArchivo['ruta'] = $rutaBase;
	$infoArchivo['raiz'] = dirname($rutaBase, 1);
	if ($valor != '.' && $valor!='..') {
		array_push($resultados, $infoArchivo);
	}
		
}
function obtenerExtension($rutaDeArchivo){
	$tipo = filetype($rutaDeArchivo);
	if ($tipo == 'file') {
		return substr($rutaDeArchivo, strripos($rutaDeArchivo, '.')+1);
	}
	else{
		return $tipo;
	}
}
function convertirBytes($bytes){
	$decimales = 2;
	$unidades = ["B", "KB", "MB", "GB"];
	$exp = floor(log($bytes, 1024)) | 0;
	return round($bytes/(pow(1024, $exp)), $decimales).$unidades[$exp];
}
print_r( stripslashes(json_encode($resultados)));


?>