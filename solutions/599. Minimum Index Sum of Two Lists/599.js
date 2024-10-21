/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
  let restaurants = []
  let indexSum = 10000
  
  // create a indexSum variable
  for (const list1WordIndex in list1) {
      // iterate on each item in list one finding for matches
      const indexOfWordInList2 = list2.indexOf(list1[list1WordIndex])
      const sum = indexOfWordInList2 + parseInt(list1WordIndex)
      
      // on each match, only save it's position if its less than the last match 
      if (indexOfWordInList2 !== -1 && (indexSum >= (indexOfWordInList2 + parseInt(list1WordIndex)))) {

        if ((indexSum === (indexOfWordInList2 + parseInt(list1WordIndex)))) {
          restaurants.push(list1[list1WordIndex])
        } else {
          restaurants = [list1[list1WordIndex]]
        }

        indexSum = sum
      }
  }
  
  return restaurants
};