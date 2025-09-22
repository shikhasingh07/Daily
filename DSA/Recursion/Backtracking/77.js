function combined(n, index, current, ans, k) {
  if (current.length === k) {
    ans.push([...current]);
    return;
  }

  for (let i = index; i <= n; i++) {
    current.push(i);
    combined(n, i + 1, current, ans, k);
    current.pop();
  }
}

var combine = function (n, k) {
  let ans = [];
  combined(n, 1, [], ans, k);
  return ans;
};

console.log(combine(4, 2));
