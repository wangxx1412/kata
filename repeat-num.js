let repeatNumbers = function(data) {
  let mainStr = "";
  for (const el of data) {
    let str = "";
    for (i = 0; i < el[1]; i++) {
      str += el[0];
    }
    mainStr += str;
    mainStr += ",";
  }
  return mainStr.slice(0, mainStr.lastIndexOf(","));
};

console.log(repeatNumbers([[1, 10]]));
console.log(
  repeatNumbers([
    [1, 2],
    [2, 3]
  ])
);
console.log(
  repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2]
  ])
);
