<?php
    require '../../modelo/modelo_categoria.php';
    $MC = new Modelo_Categoria();//Instanciamos
    $consulta = $MC->listar_categoria();
    if($consulta){
        echo json_encode($consulta);
    }else{
        echo '{
		    "sEcho": 1,
		    "iTotalRecords": "0",
		    "iTotalDisplayRecords": "0",
		    "aaData": []
		}';
    }

?>