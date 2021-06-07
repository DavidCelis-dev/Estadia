<?php
    require '../../modelo/modelo_rutina.php';

    $MR = new Modelo_Rutina();
    $id = htmlspecialchars($_POST['id'],ENT_QUOTES,'UTF-8');
    $instruccionnuevo = htmlspecialchars($_POST['instruccionnuevo'],ENT_QUOTES,'UTF-8');
    $titulonuevo = htmlspecialchars($_POST['titulonuevo'],ENT_QUOTES,'UTF-8');
    $descripcionnuevo = htmlspecialchars($_POST['descripcionnuevo'],ENT_QUOTES,'UTF-8');
    $titulonuevo2 = htmlspecialchars($_POST['titulonuevo2'],ENT_QUOTES,'UTF-8');
    $descripcionnuevo2 = htmlspecialchars($_POST['descripcionnuevo2'],ENT_QUOTES,'UTF-8');
    $titulonuevo3 = htmlspecialchars($_POST['titulonuevo3'],ENT_QUOTES,'UTF-8');
    $descripcionnuevo3 = htmlspecialchars($_POST['descripcionnuevo3'],ENT_QUOTES,'UTF-8');
    $titulonuevo4 = htmlspecialchars($_POST['titulonuevo4'],ENT_QUOTES,'UTF-8');
    $descripcionnuevo4 = htmlspecialchars($_POST['descripcionnuevo4'],ENT_QUOTES,'UTF-8');
    $titulonuevo5 = htmlspecialchars($_POST['titulonuevo5'],ENT_QUOTES,'UTF-8');
    $descripcionnuevo5 = htmlspecialchars($_POST['descripcionnuevo5'],ENT_QUOTES,'UTF-8');
    $link1nuevo = htmlspecialchars($_POST['link1nuevo'],ENT_QUOTES,'UTF-8');
    $link2nuevo = htmlspecialchars($_POST['link2nuevo'],ENT_QUOTES,'UTF-8');
    $consulta = $MR->Editar_Rutina($id,$instruccionnuevo,$titulonuevo,$descripcionnuevo,$titulonuevo2,$descripcionnuevo2,$titulonuevo3,$descripcionnuevo3,$titulonuevo4,$descripcionnuevo4,$titulonuevo5,$descripcionnuevo5,$link1nuevo,$link2nuevo);
    echo $consulta;

?>