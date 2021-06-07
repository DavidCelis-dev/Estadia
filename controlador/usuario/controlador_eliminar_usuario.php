<?php
    require '../../modelo/modelo_usuario.php';

    $MU = new Modelo_Usuario();
    $idusuario = htmlspecialchars($_POST['idusuario'],ENT_QUOTES,'UTF-8');
    $consulta = $MU->Eliminar_Usuario($idusuario);
    echo $consulta;

?>