<?php
    require '../../modelo/modelo_usuario.php';
    $MU = new Modelo_Usuario();
    $consulta = $MU->listar_clasificacion_combo();
    echo json_encode($consulta);
?>