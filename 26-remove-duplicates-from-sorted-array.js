// Time Complexity O(n)
// Space Complexity O(1)
// Two pointers - slow and fast

var removeDuplicates = function(nums) {
    let k = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[k]) {
            nums[++k] = nums[i];
        }
    }
    return k + 1;
};