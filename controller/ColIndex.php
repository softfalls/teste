<?php

Class ColIndex {

    function buscarCarro($obj) {
        $sql = "select * from tab_carros where cor_carro like '%".$obj->cor_carro."%'";
        $r = mysql_query($sql);
        while ($row = mysql_fetch_object($r)) {
            $array[] = $row;
        }
        return @$array;
    }

}

?>
