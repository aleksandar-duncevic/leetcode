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