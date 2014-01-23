<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

class ColConecta {

    public function __construct() {
        
    }

    public function conectar() {
        @mysql_connect('127.0.0.1', '', '');
        @mysql_select_db('testes');
    }

}

?>
