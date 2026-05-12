// Time Complexity O(m + n)
// Space Complexity O(1)
// Start merging from the end of nums1

var merge = function(nums1, m, nums2, n) {
    let i = m - 1; // End of the first array
    let j = n - 1; // End of the second array
    let k = m + n - 1; // End of the merged array

    while (i >= 0 && j >= 0) {
        if (nums2[j] > nums1[i]) {
            nums1[k--] = nums2[j--];
        } else {
            nums1[k--] = nums1[i--];
        }
    }
    
    // If there are any remaining elements in nums2
    while (j >= 0) {
        nums1[k--] = nums2[j--];
    }
};


/*
// Time Complexity O(m + n)
// Space Complexity O(m + n)

var merge = function(nums1, m, nums2, n) {
    const result = [];
    let i = 0;
    let j = 0;
    while (i < m && j < n){
        if (nums1[i] < nums2[j]) {
            result.push(nums1[i++]);
        } else {
            result.push(nums2[j++]);
        }
    }
    while (i < m) {
        result.push(nums1[i++]);
    }
    while (j < n) {
        result.push(nums2[j++]);
    }
    for (let i = 0; i < m + n; i++) {
        nums1[i] = result[i];
    }
};

*/