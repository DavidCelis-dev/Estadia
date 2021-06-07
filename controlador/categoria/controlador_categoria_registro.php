<?php
    require '../../modelo/modelo_categoria.php';
    $MC = new Modelo_Categoria();
    $categoria = htmlspecialchars($_POST['c'],ENT_QUOTES,'UTF-8');
    $estatus = htmlspecialchars($_POST['e'],ENT_QUOTES,'UTF-8');
    $consulta = $MC->Registrar_Categoria($categoria,$estatus);
    echo $consulta;
?>  