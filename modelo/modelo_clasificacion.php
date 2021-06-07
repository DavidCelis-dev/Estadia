<?php
    class Modelo_Clasificacion{
        private $conexion;
        function __construct(){
            require_once 'modelo_conexion.php';
            $this->conexion = new conexion();
            $this->conexion->conectar();
        }

        function listar_clasificacion(){
            $sql = "call SP_LISTAR_CLASIFICACION()";
			$arreglo = array();
			if ($consulta = $this->conexion->conexion->query($sql)) {
				while ($consulta_VU = mysqli_fetch_assoc($consulta)) {
                    $arreglo["data"][]=$consulta_VU;

				}
				return $arreglo;
				$this->conexion->cerrar();
			}
        }

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
        }
    }

?>        