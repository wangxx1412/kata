let camelCase = function(input) {
  const result = input.split(" ");
  if (result.length > 1) {
    for (i = 1; i < result.length; i++) {
      result[i] = result[i].slice(0, 1).toUpperCase() + result[i].slice(1);
    }
  }
  return result.join("");
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
