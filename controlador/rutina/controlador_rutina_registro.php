<?php
    require '../../modelo/modelo_rutina.php';

    $MR = new Modelo_Rutina();
    $usuario = htmlspecialchars($_POST['usuario'],ENT_QUOTES,'UTF-8');
    $instruccion = htmlspecialchars($_POST['instruccion'],ENT_QUOTES,'UTF-8');
    $titulo = htmlspecialchars($_POST['titulo'],ENT_QUOTES,'UTF-8');
    $descripcion = htmlspecialchars($_POST['descripcion'],ENT_QUOTES,'UTF-8');
    $titulo2 = htmlspecialchars($_POST['titulo2'],ENT_QUOTES,'UTF-8');
    $descripcion2 = htmlspecialchars($_POST['descripcion2'],ENT_QUOTES,'UTF-8');
    $titulo3 = htmlspecialchars($_POST['titulo3'],ENT_QUOTES,'UTF-8');
    $descripcion3 = htmlspecialchars($_POST['descripcion3'],ENT_QUOTES,'UTF-8');
    $titulo4 = htmlspecialchars($_POST['titulo4'],ENT_QUOTES,'UTF-8');
    $descripcion4 = htmlspecialchars($_POST['descripcion4'],ENT_QUOTES,'UTF-8');
    $titulo5 = htmlspecialchars($_POST['titulo5'],ENT_QUOTES,'UTF-8');
    $descripcion5 = htmlspecialchars($_POST['descripcion5'],ENT_QUOTES,'UTF-8');
    $link1 = htmlspecialchars($_POST['link1'],ENT_QUOTES,'UTF-8');
    $link2 = htmlspecialchars($_POST['link2'],ENT_QUOTES,'UTF-8');
    $nombrearchivo = htmlspecialchars($_POST['nombrearchivo'],ENT_QUOTES,'UTF-8');
    $nombrearchivo2 = htmlspecialchars($_POST['nombrearchivo2'],ENT_QUOTES,'UTF-8');
    $nombrearchivo3 = htmlspecialchars($_POST['nombrearchivo3'],ENT_QUOTES,'UTF-8');
    $nombrearchivo4 = htmlspecialchars($_POST['nombrearchivo4'],ENT_QUOTES,'UTF-8');
    $nombrearchivo5 = htmlspecialchars($_POST['nombrearchivo5'],ENT_QUOTES,'UTF-8');
    $nombrearchivo6 = htmlspecialchars($_POST['nombrearchivo6'],ENT_QUOTES,'UTF-8');
    

    if(is_array($_FILES) && count($_FILES)>0){
        if(move_uploaded_file($_FILES['foto']['tmp_name'],"img/".$nombrearchivo)){
            $ruta='controlador/rutina/img/'.$nombrearchivo;
            
        if (move_uploaded_file($_FILES['foto2']['tmp_name'],"img2/".$nombrearchivo2)) {
           $ruta2='controlador/rutina/img2/'.$nombrearchivo2;
        
        }

        if (move_uploaded_file($_FILES['foto3']['tmp_name'],"img3/".$nombrearchivo3)) {
           $ruta3='controlador/rutina/img3/'.$nombrearchivo3;
        
        }

        if (move_uploaded_file($_FILES['foto4']['tmp_name'],"img4/".$nombrearchivo4)) {
           $ruta4='controlador/rutina/img4/'.$nombrearchivo4;
        
        }

        if (move_uploaded_file($_FILES['foto5']['tmp_name'],"img5/".$nombrearchivo5)) {
           $ruta5='controlador/rutina/img5/'.$nombrearchivo5;
        
        }

         if (move_uploaded_file($_FILES['audio']['tmp_name'],"audio/".$nombrearchivo6)) {
           $ruta6='controlador/rutina/audio/'.$nombrearchivo6;
        
        }
            $consulta = $MR->Registar_Rutina($usuario,$instruccion,$titulo,$ruta,
                $descripcion,$titulo2,$ruta2,$descripcion2,$titulo3,$ruta3,$descripcion3,$titulo4,$ruta4,$descripcion4,$titulo5,$ruta5,$descripcion5,$ruta6,$link1,$link2);
            echo $consulta;
        }else{
            echo 0;
        }
    }else{
        echo 0;
    }

?>