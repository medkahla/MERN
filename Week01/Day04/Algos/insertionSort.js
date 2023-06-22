const array1 = [3, 5, 2, 1, 0]

function insertionSort(arr){
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i];
        for (let j = i-1 ; j >= 0 ; j--) {
            if (temp < arr[j]) {
                arr[j+1] = arr[j];
                if (j==0){
                  arr[j] = temp
                }
            }else{
                arr[j+1] = temp;
                break;
            }
        }
    }
    return arr
}
console.log(insertionSort(array1))