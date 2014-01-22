<?php

include_once '../controller/ColIndex.php';
include_once '../controller/ColConecta.php';

// variavel $funcao esta recebendo o valor(string) da variavel funcao que esta dentro do ajax.
$funcao = $_REQUEST['funcao'];
// variavel $obj que recebe o um objeto do ajax, (object) é um parse que informa ao php que oque é recebido deve ser tratado como objeto
//$obj = (object) $_REQUEST['obj'];
$con = new ColConecta();
$con-> conectar();



// call_user_func chama a função que esta sendo passada no parametro
// essa funcao é chamada conforme for repassadas as string
call_user_func($funcao);

function buscarCarro (){
    $obj = (object) $_REQUEST['obj'];
    $ind = new ColIndex();
    $resultado = $ind->buscarCarro($obj);
    echo json_encode($resultado);
};

function inserirCarro (){
    $ind = new ColIndex();
    
};

function atualizarCarro (){
    $ind = new ColIndex();
    
};





?>
