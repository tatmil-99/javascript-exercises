const repeatString = function(str, num) {
  let strToRepeat = [];

  for (let i = 0; i < num; i++) {
    strToRepeat.push(str);
  }

  if (num < 0) {
    return 'ERROR';
  } 
  return strToRepeat.join('');
};

// Do not edit below this line
module.exports = repeatString;
