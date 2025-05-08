const maxProduct = function (n) {
  let res = 1;
  var split = n.toString().split("");

  for (const num of split) {
    res *= num;
  }
  return res;
};

console.log(maxProduct(267));
