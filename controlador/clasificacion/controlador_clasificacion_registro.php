<?php
    require '../../modelo/modelo_clasificacion.php';
    $MC = new Modelo_Clasificacion();
    $clasificacion = htmlspecialchars($_POST['clasificacion'],ENT_QUOTES,'UTF-8');
    $estatus = htmlspecialchars($_POST['estatus'],ENT_QUOTES,'UTF-8');
    $consulta = $MC->Registrar_Clasificacion($clasificacion,$estatus);
    echo $consulta;
?>  