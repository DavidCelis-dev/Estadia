<?php
    class Modelo_Dietas{
        private $conexion;
        function __construct(){
            require_once 'modelo_conexion.php';
            $this->conexion = new conexion();
            $this->conexion->conectar();
        }

        function listar_dietas(){
            $sql = "call SP_LISTAR_DIETAS()";
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

       function Registrar_Dietas($usu,$titulo,$descripcion){
            $sql = "call SP_REGISTRAR_DIETAS('$usu','$titulo','$descripcion')";
            if ($consulta = $this->conexion->conexion->query($sql)) {
                if ($row = mysqli_fetch_array($consulta)) {
                        return $id= trim($row[0]);
                }
                $this->conexion->cerrar();
            }
        }

        function Modificar_Datos_Dietas($usu,$titulo,$descripcion){
            $sql = "call SP_MODIFICAR_DATOS_DIETAS('$usu','$titulo','$descripcion')";
            if ($consulta = $this->conexion->conexion->query($sql)) {
                return 1;               
            }else{
                return 0;
            }
        }

        function Eliminar_Dieta($iddietas){
            $sql = "call SP_ELIMINAR_DIETAS('$iddietas')";
            if ($consulta = $this->conexion->conexion->query($sql)) {
                return 1;               
            }else{
                return 0;
            }
        }

        /*function Modificar_Clasificacion($id,$clasificacionactual,$clasificacionnuevo,$estatus){
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