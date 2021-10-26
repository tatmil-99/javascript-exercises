const repeatString = function(str, num) {
  if (num < 0) {
    return 'ERROR';
  } 

  let strToRepeat = [];
  for (let i = 0; i < num; i++) {
    strToRepeat.push(str);
  }
  return strToRepeat.join('');
};

// Do not edit below this line
module.exports = repeatString;
