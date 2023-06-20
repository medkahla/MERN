const nums1 = [5, 3, 4, 2, 1];
const nums2 = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8]


function bubbleSort(nums){

    for (let i=0; i <nums.length;i++){
        for (let j = 0; j < nums.length-1-i; j++) {
            if (nums[j] > nums[j+1]) {
                let swap = nums[j];
                nums[j] = nums[j+1];
                nums[j+1] = swap;
            }
        }

    }

    return nums;
}

console.log(bubbleSort(nums1));
console.log(bubbleSort(nums2));