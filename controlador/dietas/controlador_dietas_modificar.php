<?php
    require '../../modelo/modelo_dietas.php';

    $MD = new Modelo_Dietas();
    $usu = htmlspecialchars($_POST['usu'],ENT_QUOTES,'UTF-8');
    $titulo = htmlspecialchars($_POST['titulo'],ENT_QUOTES,'UTF-8');
    $descripcion = htmlspecialchars($_POST['descripcion'],ENT_QUOTES,'UTF-8');;
    $consulta = $MD->Modificar_Datos_Dietas($usu,$titulo,$descripcion);
    echo $consulta;

?>