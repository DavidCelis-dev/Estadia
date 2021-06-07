<?php
    class Modelo_Categoria{
        private $conexion;
        function __construct(){
            require_once 'modelo_conexion.php';
            $this->conexion = new conexion();
            $this->conexion->conectar();
        }

        function listar_categoria(){
            $sql = "call SP_LISTAR_CATEGORIA()";
			$arreglo = array();
			if ($consulta = $this->conexion->conexion->query($sql)) {
				while ($consulta_VU = mysqli_fetch_assoc($consulta)) {
                    $arreglo["data"][]=$consulta_VU;

				}
				return $arreglo;
				$this->conexion->cerrar();
			}
        }

       function Registrar_Categoria($categoria,$estatus){
            $sql = "call SP_REGISTRAR_CATEGORIA('$categoria','$estatus')";
            if ($consulta = $this->conexion->conexion->query($sql)) {
                if ($row = mysqli_fetch_array($consulta)) {
                        return $id= trim($row[0]);
                }
                $this->conexion->cerrar();
            }
        }

        function Modificar_Categoria($id,$categoriaactual,$categorianuevo,$estatus){
            $sql = "call SP_MODIFICAR_CATEGORIA('$id','$categoriaactual','$categorianuevo','$estatus')";
            if ($consulta = $this->conexion->conexion->query($sql)) {
                if ($row = mysqli_fetch_array($consulta)) {
                        return $id= trim($row[0]);
                }
                $this->conexion->cerrar();
            }
        }
    }

?>        