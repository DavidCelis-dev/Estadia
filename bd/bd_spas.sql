-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 22-04-2021 a las 04:43:33
-- Versión del servidor: 5.7.31
-- Versión de PHP: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bd_spas`
--

DELIMITER $$
--
-- Procedimientos
--
DROP PROCEDURE IF EXISTS `SP_ELIMINAR_CATEGORIA`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_ELIMINAR_CATEGORIA` (IN `ID` INT)  DELETE FROM categoria
WHERE catego_id=ID$$

DROP PROCEDURE IF EXISTS `SP_ELIMINAR_CLASIFICACION`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_ELIMINAR_CLASIFICACION` (IN `ID` INT)  DELETE FROM clasificacion
WHERE clasifica_id=ID$$

DROP PROCEDURE IF EXISTS `SP_ELIMINAR_DIETAS`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_ELIMINAR_DIETAS` (IN `ID` INT)  DELETE FROM dietas
WHERE id_dieta=ID$$

DROP PROCEDURE IF EXISTS `SP_ELIMINAR_RUTINA`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_ELIMINAR_RUTINA` (IN `ID` INT)  DELETE FROM rutinas
WHERE idRutina=ID$$

DROP PROCEDURE IF EXISTS `SP_ELIMINAR_USUARIO`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_ELIMINAR_USUARIO` (IN `ID` INT)  DELETE FROM usuario
WHERE usu_id=ID$$

DROP PROCEDURE IF EXISTS `SP_LISTAR_CATEGORIA`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_LISTAR_CATEGORIA` ()  SELECT * FROM categoria$$

DROP PROCEDURE IF EXISTS `SP_LISTAR_CATEGORIA_COMBO`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_LISTAR_CATEGORIA_COMBO` (IN `IDUSUARIO` INT)  SELECT * FROM categoria$$

DROP PROCEDURE IF EXISTS `SP_LISTAR_CLASIFICACION`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_LISTAR_CLASIFICACION` ()  SELECT * FROM clasificacion$$

DROP PROCEDURE IF EXISTS `SP_LISTAR_COMBO_CATEGORIA`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_LISTAR_COMBO_CATEGORIA` ()  SELECT 
catego_id,
catego_nombre
FROM categoria 
WHERE catego_estatus='ACTIVADO'$$

DROP PROCEDURE IF EXISTS `SP_LISTAR_COMBO_CLASIFICACION`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_LISTAR_COMBO_CLASIFICACION` ()  SELECT * FROM clasificacion WHERE clasifica_estatus='ACTIVADO'$$

DROP PROCEDURE IF EXISTS `SP_LISTAR_COMBO_ROL`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_LISTAR_COMBO_ROL` ()  SELECT
rol.rol_id,
rol.rol_nombre
FROM
rol$$

DROP PROCEDURE IF EXISTS `SP_LISTAR_DIETAS`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_LISTAR_DIETAS` ()  SELECT
dietas.id_dieta,
dietas.titu_dieta,
dietas.descrip_dieta,
usuario.usu_id,
usuario.nombre
FROM
dietas
INNER JOIN usuario ON dietas.usu_id = usuario.usu_id$$

DROP PROCEDURE IF EXISTS `SP_LISTAR_RUTINA`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_LISTAR_RUTINA` ()  SELECT
rutinas.idRutina,
rutinas.instruc_rutina,
rutinas.titulo1,
rutinas.imagen1,
rutinas.descripcion1,
rutinas.titulo2,
rutinas.imagen2,
rutinas.descripcion2,
rutinas.titulo3,
rutinas.imagen3,
rutinas.descripcion3,
rutinas.titulo4,
rutinas.imagen4,
rutinas.descripcion4,
rutinas.titulo5,
rutinas.imagen5,
rutinas.descripcion5,
rutinas.link1,
rutinas.link2,
usuario.usu_id,
usuario.nombre
FROM
rutinas
INNER JOIN usuario ON rutinas.usu_id = usuario.usu_id$$

DROP PROCEDURE IF EXISTS `SP_LISTAR_USUARIO`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_LISTAR_USUARIO` ()  BEGIN
DECLARE CANTIDAD int;
SET @CANTIDAD:=0;
SELECT
@CANTIDAD:=@CANTIDAD+1 AS posicion,
usuario.usu_id,
usuario.usu_nombre,
usuario.usu_sexo,
usuario.usu_observa,
usuario.foto,
usuario.rol_id,
usuario.usu_estatus,
usuario.numero,
usuario.nombre,
usuario.catego_id,
usuario.clasifica_id,
rol.rol_nombre,
clasificacion.clasifica_nombre,
categoria.catego_nombre,
usuario.usu_email
FROM
usuario
INNER JOIN rol ON usuario.rol_id = rol.rol_id
INNER JOIN categoria ON usuario.catego_id = categoria.catego_id
INNER JOIN clasificacion ON usuario.clasifica_id = clasificacion.clasifica_id;
END$$

DROP PROCEDURE IF EXISTS `SP_LISTAR_USUARIO_COMBO`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_LISTAR_USUARIO_COMBO` ()  SELECT
usu_id,
nombre
FROM usuario$$

DROP PROCEDURE IF EXISTS `SP_MODIFICAR_CATEGORIA`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_MODIFICAR_CATEGORIA` (IN `ID` INT, IN `CATEGORIAACTUAL` VARCHAR(30), IN `CATEGORIANUEVO` VARCHAR(30), IN `ESTATUS` VARCHAR(20))  BEGIN
DECLARE CANTIDAD INT;
IF CATEGORIAACTUAL=CATEGORIANUEVO THEN
	UPDATE categoria SET
    catego_estatus=ESTATUS
    WHERE catego_id=ID;
    SELECT 1;
ELSE
    SET @CANTIDAD:=(SELECT COUNT(*) FROM categoria WHERE catego_nombre=CATEGORIANUEVO);
    IF @CANTIDAD= 0 THEN
    	UPDATE categoria SET
    	catego_estatus=ESTATUS,
        catego_nombre=CATEGORIANUEVO
    	WHERE catego_id=ID;
    	SELECT 1;
     ELSE
     	SELECT 2;
END IF;

END IF;

END$$

DROP PROCEDURE IF EXISTS `SP_MODIFICAR_CLASIFICACION`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_MODIFICAR_CLASIFICACION` (IN `ID` INT, IN `CLASIFICACIONACTUAL` VARCHAR(30), IN `CLASIFICACIONNUEVO` VARCHAR(30), IN `ESTATUS` VARCHAR(20))  BEGIN
DECLARE CANTIDAD INT;

IF CLASIFICACIONACTUAL=CLASIFICACIONNUEVO THEN
	UPDATE clasificacion SET
    clasifica_estatus=ESTATUS
    WHERE clasifica_id=ID;
    SELECT 1;
ELSE
	SET @CANTIDAD:=(SELECT COUNT(*) FROM clasificacion WHERE clasifica_nombre=CLASIFICACIONNUEVO);
    if @CANTIDAD = 0 THEN
    UPDATE clasificacion SET
    clasifica_nombre=CLASIFICACIONNUEVO,
    clasifica_estatus=ESTATUS
    WHERE clasifica_id=ID;
    SELECT 1;
    ELSE
    SELECT 2;
END IF;    
END IF;

END$$

DROP PROCEDURE IF EXISTS `SP_MODIFICAR_CONTRA_USUARIO`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_MODIFICAR_CONTRA_USUARIO` (IN `IDUSUARIO` INT, IN `CONTRA` VARCHAR(250))  UPDATE usuario SET
usu_contrasena=CONTRA
WHERE usu_id=IDUSUARIO$$

DROP PROCEDURE IF EXISTS `SP_MODIFICAR_DATOS_DIETAS`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_MODIFICAR_DATOS_DIETAS` (IN `USUARIO` INT, IN `TITULO` VARCHAR(50), IN `DESCRIPCION` TEXT)  UPDATE dietas SET
titu_dieta=TITULO,
descrip_dieta=DESCRIPCION
WHERE usu_id=USUARIO$$

DROP PROCEDURE IF EXISTS `SP_MODIFICAR_DATOS_USUARIO`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_MODIFICAR_DATOS_USUARIO` (IN `IDUSUARIO` INT, IN `SEXO` CHAR(1), IN `CLASIFICA` INT, IN `CATEGO` INT, IN `NUMERO` VARCHAR(10), IN `OBSERVACIONES` TEXT, IN `IDROL` INT, IN `EMAIL` VARCHAR(225), IN `NOMBRE` VARCHAR(50))  UPDATE usuario SET
usu_sexo=SEXO,
clasifica_id=CLASIFICA,
catego_id=CATEGO,
numero=NUMERO,
usu_observa=OBSERVACIONES,
rol_id=IDROL,
nombre=NOMBRE,
usu_email=EMAIL
WHERE usu_id=IDUSUARIO$$

DROP PROCEDURE IF EXISTS `SP_MODIFICAR_ESTATUS_USUARIO`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_MODIFICAR_ESTATUS_USUARIO` (IN `IDUSUARIO` INT, IN `ESTATUS` VARCHAR(20))  UPDATE usuario SET
usu_estatus=ESTATUS
WHERE usu_id=IDUSUARIO$$

DROP PROCEDURE IF EXISTS `SP_MODIFICAR_RUTINA`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_MODIFICAR_RUTINA` (IN `ID` INT, IN `INSTRUCCION` TEXT, IN `TITULO1` VARCHAR(50), IN `DESCRIPCION1` TEXT, IN `TITULO2` VARCHAR(50), IN `DESCRIPCION2` TEXT, IN `TITULO3` VARCHAR(50), IN `DESCRIPCION3` TEXT, IN `TITULO4` VARCHAR(50), IN `DESCRIPCION4` TEXT, IN `TITULO5` VARCHAR(50), IN `DESCRIPCION5` TEXT, IN `LINK1` VARCHAR(300), IN `LINK2` VARCHAR(300))  BEGIN
UPDATE rutinas SET
instruc_rutina=INSTRUCCION,
titulo1=TITULO1,
descripcion1=DESCRIPCION1,
titulo2=TITULO2,
descripcion2=DESCRIPCION2,
titulo3=TITULO3,
descripcion3=DESCRIPCION3,
titulo4=TITULO4,
descripcion4=DESCRIPCION4,
titulo5=TITULO5,
descripcion5=DESCRIPCION5,
link1=LINK1,
link2=LINK2
WHERE idRutina=ID;
SELECT 1;
END$$

DROP PROCEDURE IF EXISTS `SP_MODIFICAR_RUTINA_AUDIO`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_MODIFICAR_RUTINA_AUDIO` (IN `ID` INT, `AUDIO` VARCHAR(250))  BEGIN
UPDATE rutinas SET
audio=AUDIO
WHERE idrutina=ID;
SELECT 1;
END$$

DROP PROCEDURE IF EXISTS `SP_MODIFICAR_RUTINA_GIF`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_MODIFICAR_RUTINA_GIF` (IN `ID` INT, IN `FOTO` VARCHAR(250))  BEGIN
UPDATE rutinas SET
imagen1=FOTO
WHERE idRutina=ID;
SELECT 1;
END$$

DROP PROCEDURE IF EXISTS `SP_MODIFICAR_RUTINA_GIF2`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_MODIFICAR_RUTINA_GIF2` (IN `ID` INT, `FOTO2` VARCHAR(250))  BEGIN
UPDATE rutinas SET
imagen2=FOTO2
WHERE idrutina=ID;
SELECT 1;
END$$

DROP PROCEDURE IF EXISTS `SP_MODIFICAR_RUTINA_GIF3`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_MODIFICAR_RUTINA_GIF3` (IN `ID` INT, `FOTO3` VARCHAR(250))  BEGIN
UPDATE rutinas SET
imagen3=FOTO3
WHERE idrutina=ID;
SELECT 1;
END$$

DROP PROCEDURE IF EXISTS `SP_MODIFICAR_RUTINA_GIF4`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_MODIFICAR_RUTINA_GIF4` (IN `ID` INT, `FOTO4` VARCHAR(250))  BEGIN
UPDATE rutinas SET
imagen4=FOTO4
WHERE idrutina=ID;
SELECT 1;
END$$

DROP PROCEDURE IF EXISTS `SP_MODIFICAR_RUTINA_GIF5`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_MODIFICAR_RUTINA_GIF5` (IN `ID` INT, `FOTO5` VARCHAR(250))  BEGIN
UPDATE rutinas SET
imagen5=FOTO5
WHERE idrutina=ID;
SELECT 1;
END$$

DROP PROCEDURE IF EXISTS `SP_MODIFICAR_USUARIO_FOTO`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_MODIFICAR_USUARIO_FOTO` (IN `ID` INT, `FOTO` VARCHAR(250))  BEGIN
UPDATE usuario SET
foto=FOTO
WHERE usu_id=ID;
SELECT 1;
END$$

DROP PROCEDURE IF EXISTS `SP_REGISTRAR_CATEGORIA`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_REGISTRAR_CATEGORIA` (IN `CATEGORIA` VARCHAR(30), IN `ESTATUS` VARCHAR(20))  BEGIN 
DECLARE CANTIDAD INT;
SET @CANTIDAD:=(SELECT COUNT(*) FROM categoria WHERE catego_nombre=CATEGORIA);
IF @CANTIDAD = 0 THEN
	INSERT INTO categoria(catego_nombre,catego_estatus)
    VALUES(CATEGORIA,ESTATUS);
    SELECT 1;
ELSE
	SELECT 2;
END IF;
END$$

DROP PROCEDURE IF EXISTS `SP_REGISTRAR_CLASIFICACION`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_REGISTRAR_CLASIFICACION` (IN `CLASIFICACION` VARCHAR(30), IN `ESTATUS` VARCHAR(20))  BEGIN 
DECLARE CANTIDAD INT;
SET @CANTIDAD:=(SELECT COUNT(*) FROM clasificacion WHERE clasifica_nombre=CLASIFICACION);
IF @CANTIDAD = 0 THEN
	INSERT INTO clasificacion(clasifica_nombre,clasifica_estatus)
    VALUES(CLASIFICACION,ESTATUS);
    SELECT 1;
ELSE
	SELECT 2;
END IF;
END$$

DROP PROCEDURE IF EXISTS `SP_REGISTRAR_DIETAS`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_REGISTRAR_DIETAS` (IN `USUARIO` INT, IN `TITULO` VARCHAR(50), IN `DESCRIPCION` TEXT)  BEGIN 
DECLARE CANTIDAD INT;
SET @CANTIDAD:=(SELECT COUNT(*) FROM dietas WHERE usu_id=USUARIO);
IF @CANTIDAD = 0 THEN
	INSERT INTO dietas(usu_id,titu_dieta,descrip_dieta)
    VALUES(USUARIO,TITULO,DESCRIPCION);
    SELECT 1;
ELSE
	SELECT 2;
END IF;
END$$

DROP PROCEDURE IF EXISTS `SP_REGISTRAR_RUTINA`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_REGISTRAR_RUTINA` (IN `USUARIO` INT, IN `INSTRUCCION` TEXT, IN `TITULO1` VARCHAR(50), IN `RUTA` TEXT, IN `DESCRIPCION1` TEXT, IN `TITULO2` VARCHAR(50), IN `RUTA2` VARCHAR(250), IN `DESCRIPCION2` TEXT, IN `TITULO3` VARCHAR(50), IN `RUTA3` VARCHAR(250), IN `DESCRIPCION3` TEXT, IN `TITULO4` VARCHAR(50), IN `RUTA4` VARCHAR(250), IN `DESCRIPCION4` TEXT, IN `TITULO5` VARCHAR(50), IN `RUTA5` VARCHAR(250), IN `DESCRIPCION5` TEXT, IN `RUTA6` VARCHAR(250), IN `LINK1` VARCHAR(300), IN `LINK2` VARCHAR(300))  BEGIN
DECLARE CANTIDAD INT;
SET @CANTIDAD=(SELECT COUNT(*) FROM rutinas WHERE usu_id=USUARIO);
IF @CANTIDAD=0 THEN
	INSERT INTO rutinas(usu_id,instruc_rutina,titulo1,imagen1,descripcion1,titulo2,imagen2,descripcion2,titulo3,imagen3,descripcion3,titulo4,imagen4,descripcion4,titulo5,imagen5,descripcion5,audio,link1,link2)
	VALUES(USUARIO,INSTRUCCION,TITULO1,RUTA,DESCRIPCION1,TITULO2,RUTA2,DESCRIPCION2,TITULO3,RUTA3,DESCRIPCION3,TITULO4,RUTA4,DESCRIPCION4,TITULO5,RUTA5,DESCRIPCION5,RUTA6,LINK1,LINK2);
    SELECT 1;
ELSE
	SELECT 2; 
END IF;

END$$

DROP PROCEDURE IF EXISTS `SP_REGISTRAR_USUARIO`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_REGISTRAR_USUARIO` (IN `USU` VARCHAR(50), IN `CONTRA` VARCHAR(250), IN `SEXO` CHAR(1), IN `CLASIFICA` VARCHAR(30), IN `CATE` VARCHAR(30), IN `NUMERO` VARCHAR(10), IN `OBSERVA` TEXT, IN `ROL` INT, IN `EMAIL` VARCHAR(225), IN `FOTO` VARCHAR(250), IN `NOMBRE` VARCHAR(50))  BEGIN
DECLARE CANTIDAD INT;
SET @CANTIDAD:=(select count(*) from usuario where usu_nombre= BINARY USU);
IF @CANTIDAD=0 THEN
	INSERT INTO usuario(usu_nombre,usu_contrasena,usu_sexo,clasifica_id,catego_id,numero,usu_observa,rol_id,usu_estatus,usu_email,foto,nombre) VALUES (USU,CONTRA,SEXO,CLASIFICA,CATE,NUMERO,OBSERVA,ROL,'ACTIVO',EMAIL,FOTO,NOMBRE);
	SELECT 1;
ELSE
	SELECT 2;
END IF;
END$$

DROP PROCEDURE IF EXISTS `SP_RESTABLECER_CONTRA`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_RESTABLECER_CONTRA` (IN `EMAIL` VARCHAR(255), IN `CONTRA` VARCHAR(255))  BEGIN
DECLARE CANTIDAD INT;
SET @CANTIDAD:=(SELECT COUNT(*) FROM usuario WHERE usu_email=EMAIL); 
IF @CANTIDAD>0 THEN
	UPDATE usuario SET
    usu_contrasena=CONTRA
    WHERE usu_email=EMAIL;
    SELECT 1;
ELSE
	SELECT 2;
END IF;
END$$

DROP PROCEDURE IF EXISTS `SP_VERIFICAR_USUARIO`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `SP_VERIFICAR_USUARIO` (IN `USUARIO` VARCHAR(50))  SELECT
usuario.usu_id,
usuario.usu_nombre,
usuario.usu_contrasena,
usuario.usu_sexo,
usuario.usu_observa,
usuario.rol_id,
usuario.usu_estatus,
rol.rol_nombre
FROM
usuario
INNER JOIN rol ON usuario.rol_id = rol.rol_id
WHERE usu_nombre= BINARY USUARIO$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

DROP TABLE IF EXISTS `categoria`;
CREATE TABLE IF NOT EXISTS `categoria` (
  `catego_id` int(11) NOT NULL AUTO_INCREMENT,
  `catego_nombre` varchar(30) DEFAULT NULL,
  `catego_estatus` enum('ACTIVADO','DESACTIVADO') NOT NULL,
  PRIMARY KEY (`catego_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`catego_id`, `catego_nombre`, `catego_estatus`) VALUES
(36, 'Mexico', 'ACTIVADO'),
(37, 'Ciudad', 'ACTIVADO'),
(39, 'Primos', 'ACTIVADO'),
(40, 'AlumnoS', 'ACTIVADO');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clasificacion`
--

DROP TABLE IF EXISTS `clasificacion`;
CREATE TABLE IF NOT EXISTS `clasificacion` (
  `clasifica_id` int(11) NOT NULL AUTO_INCREMENT,
  `clasifica_nombre` varchar(30) NOT NULL,
  `clasifica_estatus` enum('ACTIVADO','DESACTIVADO') NOT NULL,
  PRIMARY KEY (`clasifica_id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `clasificacion`
--

INSERT INTO `clasificacion` (`clasifica_id`, `clasifica_nombre`, `clasifica_estatus`) VALUES
(2, 'Hipertensos', 'ACTIVADO'),
(26, 'Huesos', 'ACTIVADO'),
(27, 'Corazon', 'ACTIVADO');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `dietas`
--

DROP TABLE IF EXISTS `dietas`;
CREATE TABLE IF NOT EXISTS `dietas` (
  `id_dieta` int(11) NOT NULL AUTO_INCREMENT,
  `titu_dieta` varchar(50) COLLATE utf8_bin NOT NULL,
  `descrip_dieta` text COLLATE utf8_bin NOT NULL,
  `usu_id` int(11) NOT NULL,
  PRIMARY KEY (`id_dieta`) USING BTREE,
  KEY `usu_id` (`usu_id`) USING BTREE,
  KEY `usu_id_2` (`usu_id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `dietas`
--

INSERT INTO `dietas` (`id_dieta`, `titu_dieta`, `descrip_dieta`, `usu_id`) VALUES
(34, 'nuevo', 'asdasdasd', 73),
(35, 'nuevo', 'asdasdasd', 74);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

DROP TABLE IF EXISTS `rol`;
CREATE TABLE IF NOT EXISTS `rol` (
  `rol_id` int(11) NOT NULL AUTO_INCREMENT,
  `rol_nombre` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`rol_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

--
-- Volcado de datos para la tabla `rol`
--

INSERT INTO `rol` (`rol_id`, `rol_nombre`) VALUES
(1, 'ADMINISTRADOR'),
(2, 'CLIENTE');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rutinas`
--

DROP TABLE IF EXISTS `rutinas`;
CREATE TABLE IF NOT EXISTS `rutinas` (
  `idRutina` int(11) NOT NULL AUTO_INCREMENT,
  `instruc_rutina` text COLLATE utf8_bin NOT NULL,
  `titulo1` varchar(50) COLLATE utf8_bin NOT NULL,
  `imagen1` varchar(500) COLLATE utf8_bin NOT NULL,
  `descripcion1` text COLLATE utf8_bin NOT NULL,
  `titulo2` varchar(50) COLLATE utf8_bin NOT NULL,
  `imagen2` varchar(250) COLLATE utf8_bin NOT NULL,
  `descripcion2` text COLLATE utf8_bin NOT NULL,
  `titulo3` varchar(50) COLLATE utf8_bin NOT NULL,
  `imagen3` varchar(250) COLLATE utf8_bin NOT NULL,
  `descripcion3` text COLLATE utf8_bin NOT NULL,
  `titulo4` varchar(50) COLLATE utf8_bin NOT NULL,
  `imagen4` varchar(250) COLLATE utf8_bin NOT NULL,
  `descripcion4` text COLLATE utf8_bin NOT NULL,
  `titulo5` varchar(50) COLLATE utf8_bin NOT NULL,
  `imagen5` varchar(250) COLLATE utf8_bin NOT NULL,
  `descripcion5` text COLLATE utf8_bin NOT NULL,
  `audio` varchar(250) COLLATE utf8_bin NOT NULL,
  `link1` varchar(300) COLLATE utf8_bin NOT NULL,
  `link2` varchar(300) COLLATE utf8_bin NOT NULL,
  `usu_id` int(11) NOT NULL,
  PRIMARY KEY (`idRutina`) USING BTREE,
  KEY `usu_id` (`usu_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=107 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `rutinas`
--

INSERT INTO `rutinas` (`idRutina`, `instruc_rutina`, `titulo1`, `imagen1`, `descripcion1`, `titulo2`, `imagen2`, `descripcion2`, `titulo3`, `imagen3`, `descripcion3`, `titulo4`, `imagen4`, `descripcion4`, `titulo5`, `imagen5`, `descripcion5`, `audio`, `link1`, `link2`, `usu_id`) VALUES
(105, 'asdasd', 'asdasd', 'controlador/rutina/img/IMG2142021233954.gif', 'asdasd', 'asdasdasd', 'controlador/rutina/img2/IMG2142021233954.gif', 'asdasd', 'asdasdasd', 'controlador/rutina/img3/IMG2142021233954.gif', 'asdasd', 'asdasdasd', 'controlador/rutina/img4/IMG2142021233954.gif', 'asdasd', 'muy bien', 'controlador/rutina/img5/IMG2142021233954.gif', 'asdasd', 'controlador/rutina/audio/AUDIO2142021233954.mp3', '', '', 72),
(106, 'asdasd', 'hola', 'controlador/rutina/img/IMG214202123405.gif', 'asdasd', 'asdasdasd', 'controlador/rutina/img2/IMG214202123405.gif', 'asdasd', 'asdasdasd', 'controlador/rutina/img3/IMG214202123405.gif', 'asdasd', 'asdasdasd', 'controlador/rutina/img4/IMG214202123405.gif', 'asdasd', 'muy bien', 'controlador/rutina/img5/IMG214202123405.gif', 'adios', 'controlador/rutina/audio/AUDIO214202123405.mp3', '', '', 73);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

DROP TABLE IF EXISTS `usuario`;
CREATE TABLE IF NOT EXISTS `usuario` (
  `usu_id` int(11) NOT NULL AUTO_INCREMENT,
  `usu_nombre` varchar(50) DEFAULT NULL,
  `usu_contrasena` varchar(255) DEFAULT NULL,
  `usu_sexo` char(1) DEFAULT NULL,
  `clasifica_id` int(11) DEFAULT NULL,
  `catego_id` int(11) DEFAULT NULL,
  `usu_observa` text,
  `rol_id` int(11) DEFAULT NULL,
  `usu_estatus` enum('ACTIVO','INACTIVO') DEFAULT NULL,
  `usu_email` varchar(225) NOT NULL,
  `foto` varchar(250) NOT NULL,
  `numero` varchar(10) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`usu_id`) USING BTREE,
  KEY `rol_id` (`rol_id`) USING BTREE,
  KEY `catego_id` (`catego_id`),
  KEY `clasifica_id` (`clasifica_id`)
) ENGINE=InnoDB AUTO_INCREMENT=75 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`usu_id`, `usu_nombre`, `usu_contrasena`, `usu_sexo`, `clasifica_id`, `catego_id`, `usu_observa`, `rol_id`, `usu_estatus`, `usu_email`, `foto`, `numero`, `nombre`) VALUES
(30, 'eduardo', '$2y$10$O5z9t8QYVl2yucY04jiLR.1bmku5J00P4z1ILT/hkh8xVjSJb1f.q', 'M', 2, 36, 'En líneas generales,  MVC es una propuesta de arquitectura del software utilizada para separar el código por sus distintas responsabilidades, manteniendo distintas capas que se encargan de hacer una tarea muy concreta, lo que ofrece beneficios diversos.\n\nMVC se usa inicialmente en sistemas donde se requiere el uso de interfaces de usuario, aunque en la práctica el mismo patrón de arquitectura se puede utilizar para distintos tipos de aplicaciones. Surge de la necesidad de crear software más robusto con un ciclo de vida más adecuado, donde se potencie la facilidad de mantenimiento, reutilización del código y la separación de conceptos.\n\nSu fundamento es la separación del código en tres capas diferentes, acotadas por su responsabilidad, en lo que se llaman Modelos, Vistas y Controladores, o lo que es lo mismo, Model, Views &amp;amp;amp;amp;amp;amp;amp;amp;amp;amp; Controllers, si lo prefieres en inglés. En este artículo estudiaremos con detalle estos conceptos, así como las ventajas de ponerlos en marcha cuando desarrollamos.\n\nMVC es un &amp;amp;amp;amp;amp;amp;amp;amp;amp;quot;invento&amp;amp;amp;amp;amp;amp;amp;amp;amp;quot; que ya tiene varias décadas y fue presentado incluso antes de la aparición de la Web. No obstante, en los últimos años ha ganado mucha fuerza y seguidores gracias a la aparición de numerosos frameworks de desarrollo web que utilizan el patrón MVC como modelo para la arquitectura de las aplicaciones web.', 1, 'ACTIVO', 'eduardomeneses2189@gmail.com', 'controlador/usuario/img/IMG3132021122018.jpg', '5518444123', ''),
(54, 'Miguel', '$2y$10$NjYYNl17jXrx1tqIxKKAVOK/xPLaJ7MQyDXCb/GDgGxfdAGsAEwQa', 'M', 2, 36, 'En líneas generales,  MVC es una propuesta de arquitectura del software utilizada para separar el código por sus distintas responsabilidades, manteniendo distintas capas que se encargan de hacer una tarea muy concreta, lo que ofrece beneficios diversos.\n\nMVC se usa inicialmente en sistemas donde se requiere el uso de interfaces de usuario, aunque en la práctica el mismo patrón de arquitectura se puede utilizar para distintos tipos de aplicaciones. Surge de la necesidad de crear software más robusto con un ciclo de vida más adecuado, donde se potencie la facilidad de mantenimiento, reutilización del código y la separación de conceptos.\n\nSu fundamento es la separación del código en tres capas diferentes, acotadas por su responsabilidad, en lo que se llaman Modelos, Vistas y Controladores, o lo que es lo mismo, Model, Views &amp;amp;amp;amp;amp;amp;amp;amp; Controllers, si lo prefieres en inglés. En este artículo estudiaremos con detalle estos conceptos, así como las ventajas de ponerlos en marcha cuando desarrollamos.\n\nMVC es un &amp;amp;amp;amp;amp;amp;amp;quot;invento&amp;amp;amp;amp;amp;amp;amp;quot; que ya tiene varias décadas y fue presentado incluso antes de la aparición de la Web. No obstante, en los últimos años ha ganado mucha fuerza y seguidores gracias a la aparición de numerosos frameworks de desarrollo web que utilizan el patrón MVC como modelo para la arquitectura de las aplicaciones web.', 2, 'ACTIVO', 'eduardomeneses2189@gmail.com', 'controlador/usuario/img/IMG303202114217.jpg', '', ''),
(56, 'lalo', '$2y$10$N3ctNsJP7mK6tHfGY6MSsuxMF5/oMbz.EmA2JSdNririlKyhlBLx.', 'M', 27, 36, 'MUY BIEN', 2, 'ACTIVO', 'eduardomeneses2189@gmail.com', 'controlador/usuario/img/defecto.PNG', '5518444', ''),
(72, 'joseperezmeneses@hotmail.com', '$2y$10$JG9/.HHWwzlWJvwJLjBVy.NjOaYvYGpNPkmY1UXckWgIJjk7bgOk6', 'M', 2, 36, 'asdasdasd', 2, 'ACTIVO', 'eduardomeneses2189@gmail.com', 'controlador/usuario/img/defecto.png', '5518444884', 'peres'),
(73, 'eduardomeneses2189@gmail.com', '$2y$10$crzeZtjmekIjh80b14vJ3u.FolF3Ls71En/L1Yde0g.9QAnvALsi.', 'M', 2, 36, 'qweqweqwe', 1, 'ACTIVO', 'eduardomeneses2189@gmail.com', 'controlador/usuario/img/defecto.png', '5518444884', 'mari'),
(74, 'eduardo9@gmail.com', '$2y$10$iczo0z/D1qiDxzet42TtOuoS52/k0mCEFR7ynC26Ow9PAJi6dmEZq', 'M', 2, 36, 'asdasd', 2, 'ACTIVO', 'eduardomeneses2189@gmail.com', 'controlador/usuario/img/defecto.png', '5518444884', 'jose');

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `dietas`
--
ALTER TABLE `dietas`
  ADD CONSTRAINT `dietas_ibfk_1` FOREIGN KEY (`usu_id`) REFERENCES `usuario` (`usu_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `rutinas`
--
ALTER TABLE `rutinas`
  ADD CONSTRAINT `rutinas_ibfk_1` FOREIGN KEY (`usu_id`) REFERENCES `usuario` (`usu_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`rol_id`) REFERENCES `rol` (`rol_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `usuario_ibfk_3` FOREIGN KEY (`clasifica_id`) REFERENCES `clasificacion` (`clasifica_id`),
  ADD CONSTRAINT `usuario_ibfk_4` FOREIGN KEY (`catego_id`) REFERENCES `categoria` (`catego_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
