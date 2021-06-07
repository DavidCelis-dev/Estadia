document.querySelector("#btn").addEventListener("click",function(){
  $longitud = 20; //numero de caracteres
  $clave = generarClave($longitud); 
  document.querySelector("#result").innerHTML = $clave;
});


/*Función principal | Generador de claves | Password Generator*/
function generarClave(long)
{
	/*caracteres permitidos*/
	let caracteres = "Aa0BbCc1DdEe2FfGgHh3IiJj4KkLl5MmNn6OoPp7QqRr8SsTt9UuVv*WwXxYyZz$",
		clave = '',
		numero;

	/*creacion de clave*/
	for(let i=0;i<long;i++)
	{
		numero = getNumero( 0, caracteres.length );
		clave += caracteres.substring( numero, numero + 1 );
	}
	return clave;
}


/*Función para generar un numero aleatorio*/
function getNumero(min,max)
{
	return Math.floor( Math.random() * ( max - min ) ) + min;
}