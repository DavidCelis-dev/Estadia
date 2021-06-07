<?php
    require '../../modelo/modelo_dietas.php';

    $MD = new Modelo_Dietas();
    $iddietas = htmlspecialchars($_POST['iddietas'],ENT_QUOTES,'UTF-8');
    $consulta = $MD->Eliminar_Dieta($iddietas);
    echo $consulta;

?>