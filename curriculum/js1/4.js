/**
 * Print String - takes in a number n and string,
 *     return the string repeated n number of times.
 * @param {number} a
 * @param {string} b
 * @returns {string}
 */

const solution = (x,b,str= "",i=0) => {
  if(x === i)
  {
   return str;
  };

  str = b  + str
  return solution(x,b,str,i+1);
};

module.exports = {
  solution,
};
