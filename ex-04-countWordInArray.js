
/**
 * countWordInArray()
 *
 * Write a function called `countWordInArray` that takes 2 inputs: a string, and an array.
 * The function should return a number that is equal to the number of times the string-argument
 * is found in the array.
 *
**/


// ++ Write YOUR CODE Below
     function countWordInArray(someString, someArray){
         let howOften = 0

          for(var i = 0; i < someArray.length; i++){
             arrEl = someArray[i]

             if(arrEl === someString){
                howOften = howOften + 1
                // para que sume 1 cada vez que encuentra la palabra debe agregarse +1
             }
          }
            return howOften
     }










// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

/*------------------Sample-Data-------------------------*/

var wordsArray_1 = ['i', 'saw', 'my', 'brother', 'who', 'supposedly', 'saw', 'my', 'sister', 'take', 'a', 'saw']
var wordsArray_2 = ["sister", "nancy", "take", 'the', 'first', 'right', 'and', 'take', 'the', 'third', 'left', 'on', 'sister', 'street']

/*-------------------TEST-1-------------------------*/
//  function accepts string, and array as arguments and
//    should return boolean if string value is in array
/*--------------------------------------------------*/
console.log("==== ex-04-countWordInArray : TEST 1 ====");

// Expected Output: words array - 1
console.assert( countWordInArray('saw', wordsArray_1) === 3)
console.assert( countWordInArray('take', wordsArray_1) === 1)
console.assert( countWordInArray('brother', wordsArray_1) === 1)
console.assert( countWordInArray('sister', wordsArray_1) === 1)

// Expected Output: words array - 2
console.assert( countWordInArray('take', wordsArray_2) === 2)
console.assert( countWordInArray('brother', wordsArray_2) === 0)
console.assert( countWordInArray('sister', wordsArray_2) === 2)

/*--------------------------------------------------*/
/*-------------------END----------------------------*/
console.log('\n\n');
