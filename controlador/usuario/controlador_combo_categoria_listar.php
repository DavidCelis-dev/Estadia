<?php
    require '../../modelo/modelo_usuario.php';
    $MU = new Modelo_Usuario();
    $consulta = $MU->listar_categoria_combo();
    echo json_encode($consulta);
?>