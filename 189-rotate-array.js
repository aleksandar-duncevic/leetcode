// Time Complexity O(n)
// Space Complexity O(1)

var rotate = function(nums, k) {
    k %= nums.length;

    // Reverse the nums
    let i = 0;
    let j = nums.length - 1;
    swap(i, j);
    
    // Reverse elements from 0 to k-1
    i = 0;
    j = k - 1;
    swap(i, j);

    // Reverse elements from k to nums.length - 1
    i = k;
    j = nums.length - 1;
    swap(i, j);

    function swap(i, j) {
        while (i < j) {
            let temp = nums[j];
            nums[j] = nums[i];
            nums[i] = temp;
            i++;
            j--;
        }
    }
};


/*
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
*/