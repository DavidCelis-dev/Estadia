<?php
    require '../../modelo/modelo_rutina.php';

    $MR = new Modelo_Rutina();
    $id = htmlspecialchars($_POST['id'],ENT_QUOTES,'UTF-8');
    $nombrearchivo = htmlspecialchars($_POST['nombrearchivo'],ENT_QUOTES,'UTF-8');
    if(is_array($_FILES) && count($_FILES)>0){
        if(move_uploaded_file($_FILES['foto']['tmp_name'],"img3/".$nombrearchivo)){
            $ruta='controlador/rutina/img3/'.$nombrearchivo;
            $consulta = $MR -> Editar_Gif3($id,$ruta);
            echo $consulta;
        }else{
            echo 0;
        }
    }else{
        echo 0;
    }

  
?>