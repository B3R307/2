
/**
 * wordMatchInArray()
 *
 * Write a function called `wordMatchInArray` that takes 2 inputs: a string, and an array.
 * The function should return a boolean value if that word is found in the array.
 *
// */


// ++ Write YOUR CODE Below

function wordMatchInArray(someString, someArray){
   let match = false

  for(var i = 0; i < someArray.length; i++){
      arrEl = someArray[i]

      if(arrEl === someString){
           match = true
      }
  }
        return match
}

// la iteracion solo se hace para el array pues el string se validará con un if






// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

/*------------------Sample-Data-------------------------*/

var sampleWordsArray = ["because", "girls", "just", "want", "to", "have", "fun"]
var sampleWordsArray2 = ["boys", "there", "is", "no", "way", "out", "of", "here"]

/*-------------------TEST-1-------------------------*/
//  function accepts string, and array as arguments and
//    should return boolean if string value is in array
/*--------------------------------------------------*/
console.log("==== ex-03-wordMatchInArray : TEST 1 ====");

// Expected Output: Sample Array - 1
console.assert(wordMatchInArray('girls', sampleWordsArray) === true)
console.assert(wordMatchInArray('fun', sampleWordsArray) === true)
console.assert(wordMatchInArray('boys', sampleWordsArray) === false)

// Expected Output: Sample Array - 2
console.assert(wordMatchInArray('boys', sampleWordsArray2) === true)
console.assert(wordMatchInArray('girls', sampleWordsArray2) === false)

/*--------------------------------------------------*/
/*-------------------END----------------------------*/
console.log('\n\n');
