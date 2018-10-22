/**
 * arrayToString()
 *
 * Write a function called `arrayToString` that takes
 *  an array of string values and returns a string with
 *  all of the values combined together.
 *
    escribe una funcion llamada arrayAstring que tome el valor de un array de strings con todos
    los valores combinados juntos

convertir los elementos de un array a una cadena de strings

 *  Example:
 *    var ex1 = arrayToString(['my','name','is','lina'])
 *    console.log(ex1)
 *        //-> 'mynameislina'
 *
 * You must use a for-loop to solve this problem.
 **/

// ++ Write YOUR CODE Below

// var myArray = []

// se declara la funcion con el argumento
function arrayToString(myArray){
  // se declara la variable de salida para el nuevo string
   var newString = ""

// se itera sobre cada elemento del array indicando la expresion inicial (a partir de donde inica la iteracion) ;
// condicion para la iteracion ;  expresion final( i++ de uno en uno, i= i+2 de dos en dos)

  for(var i = 0; i < myArray.length; i++){
    // se alamcena en una variable la iteracion sobre el array
     joinString = myArray[i]
     // console.log(newString);
     newString = newString.concat(joinString)
 // se define la variable de salida en la que se concatena el array iterado
  }
    // console.log(newString);
    return newString
}


// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

/*-------------------Output-------------------------*/

var arrayExample2 = ['cool', 'great', 'nice', 'awesome', 'sweet']
var arrayExample3 = ['cool', 'great', 'awesome', 'super']
var arrayExample4 = ['wow', 'great', 'wow', 'neat']

var returnedVal1 = arrayToString(["Hello", "how", "are", "you"])
var returnedVal2 = arrayToString(arrayExample2)
var returnedVal3 = arrayToString(arrayExample3)
var returnedVal4 = arrayToString(arrayExample4)

/*-------------------TEST-1-------------------------*/
//  function accepts array as argument and
//    should return a joined string of the array values
/*--------------------------------------------------*/
console.log("==== ex-01-arrayToString : TEST 1 ====");

console.assert( returnedVal1 === "Hellohowareyou" )

console.assert( returnedVal2 === 'coolgreatniceawesomesweet' )

console.assert( returnedVal3 === 'coolgreatawesomesuper' )

console.assert( returnedVal4 === 'wowgreatwowneat' )

/*--------------------------------------------------*/
/*-------------------END----------------------------*/
console.log('\n\n');
