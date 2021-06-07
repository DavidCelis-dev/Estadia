<?php
    class Modelo_Rutina{
        private $conexion;
        function __construct(){
            require_once 'modelo_conexion.php';
            $this->conexion = new conexion();
            $this->conexion->conectar();
        }

        function listar_rutina(){
            $sql = "call SP_LISTAR_RUTINA()";
			$arreglo = array();
			if ($consulta = $this->conexion->conexion->query($sql)) {
				while ($consulta_VU = mysqli_fetch_assoc($consulta)) {
                    $arreglo["data"][]=$consulta_VU;

				}
				return $arreglo;
				$this->conexion->cerrar();
			}
        }

        
        function listar_usuario_combo(){
            $sql = "call SP_LISTAR_USUARIO_COMBO()";
            $arreglo = array();
            if ($consulta = $this->conexion->conexion->query($sql)) {
                while ($consulta_VU = mysqli_fetch_array($consulta)) {
                    $arreglo[]=$consulta_VU;
                }
                return $arreglo;
                $this->conexion->cerrar();
            }
        }

        function Registar_Rutina($usuario,$instruccion,$titulo,$ruta,$descripcion,$titulo2,$ruta2,$descripcion2,$titulo3,$ruta3,$descripcion3,$titulo4,$ruta4,$descripcion4,$titulo5,$ruta5,$descripcion5,$link1,$link2,$ruta6){
            $sql = "call SP_REGISTRAR_RUTINA('$usuario','$instruccion','$titulo','$ruta','$descripcion','$titulo2','$ruta2','$descripcion2','$titulo3','$ruta3','$descripcion3','$titulo4','$ruta4','$descripcion4','$titulo5','$ruta5','$descripcion5','$link1','$link2','$ruta6')";
            if ($consulta = $this->conexion->conexion->query($sql)) {

          if ($row = mysqli_fetch_array($consulta)) {
                        return $id= trim($row[0]);
                }
                $this->conexion->cerrar();
        }
}

function Editar_Rutina($id,$instruccionnuevo,$titulonuevo,$descripcionnuevo,$titulonuevo2,$descripcionnuevo2,$titulonuevo3,$descripcionnuevo3,$titulonuevo4,$descripcionnuevo4,$titulonuevo5,$descripcionnuevo5,$link1nuevo,$link2nuevo){
            $sql = "call SP_MODIFICAR_RUTINA('$id','$instruccionnuevo','$titulonuevo','$descripcionnuevo','$titulonuevo2','$descripcionnuevo2','$titulonuevo3','$descripcionnuevo3','$titulonuevo4','$descripcionnuevo4','$titulonuevo5','$descripcionnuevo5','$link1nuevo','$link2nuevo')";
            if ($consulta = $this->conexion->conexion->query($sql)) {
                if ($row = mysqli_fetch_array($consulta)) {
                        return $id= trim($row[0]);
                }
                $this->conexion->cerrar();
            }
        }

        function Editar_Gif($id,$ruta){
            $sql = "call SP_MODIFICAR_RUTINA_GIF('$id','$ruta')";
            if ($consulta = $this->conexion->conexion->query($sql)) {
                if ($row = mysqli_fetch_array($consulta)) {
                        return $id= trim($row[0]);
                }
                $this->conexion->cerrar();
            }
        }

         function Editar_Gif2($id,$ruta){
            $sql = "call SP_MODIFICAR_RUTINA_GIF2('$id','$ruta')";
            if ($consulta = $this->conexion->conexion->query($sql)) {
                if ($row = mysqli_fetch_array($consulta)) {
                        return $id= trim($row[0]);
                }
                $this->conexion->cerrar();
            }
        }

        function Editar_Gif3($id,$ruta){
            $sql = "call SP_MODIFICAR_RUTINA_GIF3('$id','$ruta')";
            if ($consulta = $this->conexion->conexion->query($sql)) {
                if ($row = mysqli_fetch_array($consulta)) {
                        return $id= trim($row[0]);
                }
                $this->conexion->cerrar();
            }
        }

        function Editar_Gif4($id,$ruta){
            $sql = "call SP_MODIFICAR_RUTINA_GIF4('$id','$ruta')";
            if ($consulta = $this->conexion->conexion->query($sql)) {
                if ($row = mysqli_fetch_array($consulta)) {
                        return $id= trim($row[0]);
                }
                $this->conexion->cerrar();
            }
        }

        function Editar_Gif5($id,$ruta){
            $sql = "call SP_MODIFICAR_RUTINA_GIF5('$id','$ruta')";
            if ($consulta = $this->conexion->conexion->query($sql)) {
                if ($row = mysqli_fetch_array($consulta)) {
                        return $id= trim($row[0]);
                }
                $this->conexion->cerrar();
            }
        }

        function Editar_Audio($id,$ruta){
            $sql = "call SP_MODIFICAR_RUTINA_AUDIO('$id','$ruta')";
            if ($consulta = $this->conexion->conexion->query($sql)) {
                if ($row = mysqli_fetch_array($consulta)) {
                        return $id= trim($row[0]);
                }
                $this->conexion->cerrar();
            }
        }


         function Eliminar_Rutina($idrutina){
            $sql = "call SP_ELIMINAR_RUTINA('$idrutina')";
            if ($consulta = $this->conexion->conexion->query($sql)) {
                return 1;               
            }else{
                return 0;
            }
        }
/*
       function Registrar_Clasificacion($clasificacion,$estatus){
            $sql = "call SP_REGISTRAR_CLASIFICACION('$clasificacion','$estatus')";
            if ($consulta = $this->conexion->conexion->query($sql)) {
                if ($row = mysqli_fetch_array($consulta)) {
                        return $id= trim($row[0]);
                }
                $this->conexion->cerrar();
            }
        }

        function Modificar_Clasificacion($id,$clasificacionactual,$clasificacionnuevo,$estatus){
            $sql = "call SP_MODIFICAR_CLASIFICACION('$id','$clasificacionactual','$clasificacionnuevo','$estatus')";
            if ($consulta = $this->conexion->conexion->query($sql)) {
                if ($row = mysqli_fetch_array($consulta)) {
                        return $id= trim($row[0]);
                }
                $this->conexion->cerrar();
            }
        }*/
    }

?>        