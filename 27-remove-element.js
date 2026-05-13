// Time Complexity O(n)
// Space Complexity O(1)
// Two pointers - slow and fast

var removeElement = function(nums, val) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) nums[k++] = nums[i];
    }
    return k;
};