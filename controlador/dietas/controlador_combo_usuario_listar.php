<?php
    require '../../modelo/modelo_dietas.php';
    $MD = new Modelo_Dietas();
    $consulta = $MD->listar_usuario_combo();
    echo json_encode($consulta);
?>