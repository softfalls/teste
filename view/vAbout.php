<?php

include_once '../controller/ColAbout.php';


@$obj = (object) $_REQUEST['obj'];

@call_user_func($_REQUEST['funcao']);

function getTexto(){
    /*$obj = (object) $_REQUEST['obj'];
    $c = new ColAbout();
    $result = $c->getTexto($obj);*/
    echo json_encode(Array('info'=>'Maison'));
}
?>
