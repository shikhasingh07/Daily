function dp(n, cost, arr) {
  if (n <= 1) return 0;

  if (arr[n] !== undefined) return arr[n];

  arr[n] = Math.min(
    dp(n - 1, cost, arr) + cost[n - 1],
    dp(n - 2, cost, arr) + cost[n - 2]
  );
  return arr[n];
}
var minCostClimbingStairs = function (cost) {
  return dp(cost.length, cost, new Array(cost.length + 1));
};

console.log(minCostClimbingStairs([10, 15, 20]));
