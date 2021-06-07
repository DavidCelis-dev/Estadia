<?php
    require '../../modelo/modelo_rutina.php';
    $MR = new Modelo_Rutina();
    $consulta = $MR->listar_usuario_combo();
    echo json_encode($consulta);
?>