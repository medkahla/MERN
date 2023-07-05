const array1 = [0, 1, 2, 2, 2, 5, 6, 7, 8, 8, 8, 9]
const array2 = [2, 2, 8, 9]
const array3 = [0, 1, 2, 2, 2, 7]
const array4 = [2, 2]
const array5 = [10]

const orderedIntersection = (arr1, arr2)=>{
    let intersection = []
    if (arr1.length == 0 || arr2.length == 0) {
        return intersection;
    }
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i]==arr2[j]) {
                if (intersection[intersection.length-1] != arr1[i]) {
                    intersection.push(arr1[i])
                }
            }
        }
    }
    return intersection
}

console.log(orderedIntersection(array1,array2));
console.log(orderedIntersection(array2,array1));
console.log(orderedIntersection(array3,array4));
console.log(orderedIntersection(array3,array5));