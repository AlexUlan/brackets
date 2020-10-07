module.exports = function check(str, bracketsConfig) {
  let controllStr = str;

  if (str.length % 2 !== 0) {
    return false;
  }

  for (let i = 0; i <= str.length; i++) {
    let replace = true;
    let tempArray = controllStr.split("");
    if (tempArray.length == 0) {
      return true;
    }
    let leftBracket;
    let rightBracket;

    bracketsConfig.forEach((element) => {
      if (controllStr[0] === element[0]) {
        leftBracket = element[0];
        rightBracket = element[1];
      }
    });

    tempArray.forEach((item, index) => {
      if (item === rightBracket && index % 2 != 0 && index !== 0 && replace) {
        console.log("item", item, "index-", index);
        tempArray.splice(index, 1);
        tempArray.splice(0, 1);
        replace = false;
      }
    });

    controllStr = tempArray.join("");
  }

  return controllStr.length === 0 ? true : false;
}
