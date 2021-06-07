<?php
    require '../../modelo/modelo_rutina.php';
    $MR = new Modelo_Rutina();//Instanciamos
    $consulta = $MR->listar_rutina();
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