// Time complexity O(n)
// Space complexity O(n)
var rotate = function(nums, k) {
    k %= nums.length;
    const copy = [];
    for (let i = 0; i < nums.length; i++) {
        copy[k++] = nums[i];
        k %= nums.length;
    }
    nums.length = 0;
    nums.push(...copy);
};