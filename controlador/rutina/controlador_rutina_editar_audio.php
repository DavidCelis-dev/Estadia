<?php
    require '../../modelo/modelo_rutina.php';

    $MR = new Modelo_Rutina();
    $id = htmlspecialchars($_POST['id'],ENT_QUOTES,'UTF-8');
    $nombrearchivo = htmlspecialchars($_POST['nombrearchivo'],ENT_QUOTES,'UTF-8');
    if(is_array($_FILES) && count($_FILES)>0){
        if(move_uploaded_file($_FILES['foto']['tmp_name'],"audio/".$nombrearchivo)){
            $ruta='controlador/rutina/audio/'.$nombrearchivo;
            $consulta = $MR -> Editar_Audio($id,$ruta);
            echo $consulta;
        }else{
            echo 0;
        }
    }else{
        echo 0;
    }

  
?>