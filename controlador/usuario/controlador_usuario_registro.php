<?php
    require '../../modelo/modelo_usuario.php';

    $MU = new Modelo_Usuario();
    $usuario = htmlspecialchars($_POST['usuario'],ENT_QUOTES,'UTF-8');
    $contra = password_hash($_POST['contra'],PASSWORD_DEFAULT,['cost'=>10]);
    $email = htmlspecialchars($_POST['email'],ENT_QUOTES,'UTF-8');
    $sexo = htmlspecialchars($_POST['sexo'],ENT_QUOTES,'UTF-8');
    $clasifica = htmlspecialchars($_POST['clasifica'],ENT_QUOTES,'UTF-8');
    $catego = htmlspecialchars($_POST['catego'],ENT_QUOTES,'UTF-8');
    $numero = htmlspecialchars($_POST['numero'],ENT_QUOTES,'UTF-8');
    $observa = htmlspecialchars($_POST['observa'],ENT_QUOTES,'UTF-8');
    $rol = htmlspecialchars($_POST['rol'],ENT_QUOTES,'UTF-8');
    $nombre = htmlspecialchars($_POST['nombre'],ENT_QUOTES,'UTF-8');
    

    $nombrearchivo = htmlspecialchars($_POST['nombrearchivo'],ENT_QUOTES,'UTF-8');
    if(is_array($_FILES) && count($_FILES)>0){
        if(move_uploaded_file($_FILES['foto']['tmp_name'],"img/".$nombrearchivo)){
            $ruta='controlador/usuario/img/'.$nombrearchivo;
            
            $consulta = $MU->Registar_Usuario($usuario,$contra,$sexo,$clasifica,$catego,$numero,$observa,$rol,$email,$ruta,$nombre);
            echo $consulta;
        }else{
            echo 0;
        }
    }else{
        $ruta='controlador/usuario/img/defecto.png';
            
            $consulta = $MU->Registar_Usuario($usuario,$contra,$sexo,$clasifica,$catego,$numero,$observa,$rol,$email,$ruta,$nombre);
            echo $consulta;
    }

?>