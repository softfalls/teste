<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Class ColAbout{
    function getTexto($obj){
        $sql = 'select * from tab_about where nome='.$obj->nome;
        mysql_connect(null, 'root', 'root123');
        $r = mysql_query($sql);
        while ($row = mysql_fetch_object($r)) {
            $array[]=$row;
        }
        return $array;
    }
}   
?>
