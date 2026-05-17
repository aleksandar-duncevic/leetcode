// Time Complexity O(n)
// Space Complexity O(1)

var removeDuplicates = function(nums) {
  if (nums.length === 0) return 0;

  let k = 0;
  let counter = 1;

  for (let i = 1; i < nums.length; i++) {
    if(nums[i] !== nums[k]) {
      nums[++k] = nums[i];
      counter = 1;
      continue;
    }
    if (counter < 2) {
      nums[++k] = nums[i];
      counter++;
    }
  }

  return k + 1;
};