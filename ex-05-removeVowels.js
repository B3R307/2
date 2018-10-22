/**
 * removeVowels()
 *
 * Write a function called `removeVowels()`.
 * It should accept a string as input,
 * and it should return a new string without the vowels.
 *
*/
// ++ Write YOUR CODE Below

   function removeVowels(someString){
     let newString = []
     let allInLowCase = someString.toLowerCase()
      // console.log(allInLowCase);

     for(var i = 0; i < allInLowCase.length; i++){
         strEl = allInLowCase[i]

         if('a' !== strEl && 'e' !== strEl && 'i' !== strEl && 'o' !== strEl && 'u' !== strEl){
             newString.push(strEl)

             var strNoVowels = newString.join('')
         }
       }
            // console.log(newString);
            // console.log(strNoVowels);
            return strNoVowels
   }


//*~*~*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

/*-------------------TEST-1-------------------------*/
//  function accepts string as arguments and
//    should return string without vowels
/*--------------------------------------------------*/
console.log("==== ex-05-removeVowels : TEST 1 ====");

console.assert( removeVowels('milk') === 'mlk' );
console.assert( removeVowels('christmas') === 'chrstms' )
console.assert( removeVowels('moo shoo pork') === 'm sh prk' )
console.assert( removeVowels('good job girls') === 'gd jb grls' )

/*-------------------TEST-2-------------------------*/
//  function should not return capital letters
/*--------------------------------------------------*/
console.log("==== ex-05-removeVowels : TEST 2 ====");

console.assert( removeVowels('Out of Order') === 't f rdr' )
console.assert( removeVowels('Estados Unidos') === 'stds nds' )
console.assert( removeVowels('GOOD JOB GIRLS') === 'GD JB GRLS' )

/*--------------------------------------------------*/
/*-------------------END----------------------------*/
console.log('\n\n');
