<?php
    require '../../modelo/modelo_rutina.php';

    $MR = new Modelo_Rutina();
    $idrutina = htmlspecialchars($_POST['idrutina'],ENT_QUOTES,'UTF-8');
    $consulta = $MR->Eliminar_Rutina($idrutina);
    echo $consulta;

?>