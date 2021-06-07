<?php
    require '../../modelo/modelo_clasificacion.php';
    $MC = new Modelo_Clasificacion();//Instanciamos
    $consulta = $MC->listar_clasificacion();
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