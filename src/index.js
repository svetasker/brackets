module.exports = function check(str, bracketsConfig) {
  const obj= {};
  let stack = [];

  for(let i=0; i<bracketsConfig.length; i++) {
    obj[bracketsConfig[i][0]]=bracketsConfig[i][1];
  }
    for (let i = 0; i < str.length; i++) {
      let currentSymbol = str[i];

      
      if (obj[currentSymbol]) {
        if(obj[currentSymbol]===currentSymbol && stack[stack.length-1]===currentSymbol) stack.pop();
        else stack.push(currentSymbol);
      } else {
        if (stack.length === 0) {
          return false;
        }

        let topElement = stack[stack.length - 1];

        if (obj[topElement] === currentSymbol) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
    return stack.length === 0;
}
