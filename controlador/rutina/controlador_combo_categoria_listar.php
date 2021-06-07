<?php
    require '../../modelo/modelo_rutina.php';
    $MR = new Modelo_Rutina();
    $idusuario = $_POST['idusuario'];
    $consulta = $MR->listar_categoria_combo($idusuario);
    echo json_encode($consulta);
?>