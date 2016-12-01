//PRIMERA PRUEBA BUENA
//Variables globales
var int a = 2
var bool b = 3
var chars s = "APROBADO =)"
function bool verdad (int num1, int num2){
	
	if(num1>num2) return true
	prompt(true)
	prompt(num2)
	return false
}

function int sumar()
{
	//Variables locales
	var int c
	c = verdad(a,b)
	if(c)
		write(s)
	return "Ups"
}

nota = sumar()