const target1 = 6
const arr1 = [3, 2, 4]
const target2 = 9
const arr2 = [2, 11, 7, 15]
const target3 = 6
const arr3 = [3, 3]
const target4 = 4
const arr4 = [4]
const target5 = 9
const arr5 = [2, 1, 1, 1]

const twoSum = (array, target) => {
    let sumIndexes = []
    if (array.length == 0) {
        return sumIndexes        
    }
    if (array.length==1 && array[0]==target) {
        sumIndexes.push(0)     
        return sumIndexes
    }
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            if (array[i]+array[j] == target) {
                sumIndexes.push(...[i,j])       
            }
        }
    }
    return sumIndexes;
}

console.log(twoSum(arr1,target1));
console.log(twoSum(arr2,target2));
console.log(twoSum(arr3,target3));
console.log(twoSum(arr4,target4));
console.log(twoSum(arr5,target5));