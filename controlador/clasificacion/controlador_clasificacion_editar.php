<?php
    require '../../modelo/modelo_clasificacion.php';
    $MC = new Modelo_Clasificacion();//Instanciamos
    $id = htmlspecialchars($_POST['id'],ENT_QUOTES,'UTF-8');
    $clasificacionactual = htmlspecialchars($_POST['clasificacionactual'],ENT_QUOTES,'UTF-8');
    $clasificacionnuevo = htmlspecialchars($_POST['clasificacionnuevo'],ENT_QUOTES,'UTF-8');
    $estatus = htmlspecialchars($_POST['estatus'],ENT_QUOTES,'UTF-8');
    $consulta = $MC->Modificar_Clasificacion($id,$clasificacionactual,$clasificacionnuevo,$estatus);
    echo $consulta;
?>