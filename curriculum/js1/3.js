/**
 * Say Hello - takes in a number x
 *     return string with “hello” repeated x times.
 * @param {number} a
 * @returns {string}
 */

const solution = (x, str="",i=0) => {
  if(i==x){
    return str;
  };

  str = str + "hello";

  return solution(x, str, i+1);
};

module.exports = {
  solution,
};
