/*
  Transform the input array of strings into uppercase strings
  For example, for the input ["cat", "hat"], return ["CAT", "HAT"]
*/
function transformArrayToUpper(listOfStrings) {
  
  let i = 0;
  while(i<listOfStrings.length)
   {let word =listOfStrings[i].toUpper;
    console.log(listOfStrings.push);
     i++;
  } 
  console.log(listOfStrings)
  return listOfStrings;

}

/*
  Write a function that returns the sum of all student ages.
  The function will be passed an array of objects and the result
  will be the sum of all ages.
  - Note, not all objects will contain an age. Omit these objects.
  For example, for the input:
    [{ name: 'Sandra', age: 31 }, {}, { name: 'Didi', age: 20}]
    the function should return 51
*/
function sumOfAllAges(listOfStudentObjects) {
  
  let i =listOfStudentObjects.length;
  let totalAge =0;
while(listOfStudentObjects.length>0)
{
  if(listOfStudentObjects[i].age==null)
  i++;

 totalAge+=listOfStudentObjects[i].age;
 i++;

}

return totalAge;

}

module.exports = { transformArrayToUpper, sumOfAllAges };
