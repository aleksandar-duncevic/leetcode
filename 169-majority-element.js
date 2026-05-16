// Time Complexity O(n log n)
// Space Complexity O(log n)

var majorityElement = function(nums) {
    nums.sort((a, b) => a - b);
    return nums[Math.floor(nums.length / 2)];
};