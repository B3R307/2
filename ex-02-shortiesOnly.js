/**
 * shortiesOnly()
 *
 * Write a function called `shortiesOnly`.
 * It should accapt as input an array of strings,
 * and it should return a new array containing
 * only those strings with less than 5 characters.
 *
*/

// escribe una funcion llamada  shortiesOnly que debe aceptar como entrada un Array
// de strings y debe retornar un nuevo array que contenga solo aquellos
// strings que contengan menos de 5 caracteres.


// ++ Write YOUR CODE Below

function shortiesOnly(arrOfStrings){
    var newArray = []

    for(var i = 0; i < arrOfStrings.length; i++){
        shortArr = arrOfStrings[i]
        // console.log(shortArr);

    if(shortArr.length < 5 ){
         // console.log(shortArr);
         newArray.push(shortArr)
    }
  }
    return newArray
}


// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

var allNames = [
    "Ed",
    "Tom",
    "Elfrid",
    "Sam",
    "Bartholomeu",
    "Wayne",
    "Theodore",
    "Ingrid",
    "Fred",
    "Yvette"
]

var moreNames = [
  'Caroline',
  'Kristen',
  'Kate',
  'Matt',
  'Ken',
  'William'
]


/*-------------------Output-------------------------*/
var shortList = shortiesOnly(allNames)
var littleNameList = shortiesOnly(moreNames)


/*-------------------TEST-1-------------------------*/
//  function accepts array as argument and
//    should return a joined string of the array values
/*--------------------------------------------------*/
console.log("==== ex-02-shortiesOnly : TEST 1 ====");

console.assert( Array.isArray(shortList) === true )
console.assert( Array.isArray(littleNameList) === true )


/*-------------------TEST-2-------------------------*/
// Checks returned array lengths
/*--------------------------------------------------*/
console.log("==== ex-02-shortiesOnly : TEST 2 ====");

console.assert( shortList.length === 4 )
console.assert( littleNameList.length === 3 )



/*-------------------TEST-3-------------------------*/
// Checks returned array values
/*--------------------------------------------------*/
console.log("==== ex-02-shortiesOnly : TEST 3 ====");

// checks to see that 'Fred', 'Sam', 'Ed' are INCUDED in the `shortList` output array.
console.assert( shortList.indexOf('Sam') >= 0 )
console.assert( shortList.indexOf('Ed') >= 0 )
console.assert( shortList.indexOf('Fred') >= 0 )
// checks to see that WAYNE is NOT in the output array.
console.assert( shortList.indexOf('Wayne') === -1 )

// checks to see that 'Kate', 'Matt' is INCUDED in the output array.
console.assert( littleNameList.indexOf('Kate') >= 0 )
console.assert( littleNameList.indexOf('Matt') >= 0 )
console.assert( littleNameList.indexOf('Ken') >= 0 )
// checks to see that 'Caroline' is NOT in the output array.
console.assert( littleNameList.indexOf('Caroline') === -1 )


/*--------------------------------------------------*/
/*-------------------END----------------------------*/
console.log('\n\n');
