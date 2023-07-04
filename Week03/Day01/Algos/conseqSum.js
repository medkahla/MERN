const target = 16
const arr1 = [2, 5, 3, 6, 7, 0, 0, 23, 11]

function conseqSum(t, arr){

    if (arr.length == 0) {
        console.log("this is an empty array");
        return arr
    }
    if ((arr.length == 1) && (arr[0]!=t)) {
        console.log("can't get this target with such array!");
        return arr
    }

    let canSum = []

    for (let i = 0; i < arr.length; i++) {
        const consecNums = [];
        let sum = 0;
        let j = i;
        while (sum <= t && j < arr.length - 1) {
            if (sum + arr[j] <= t) {
                sum += arr[j];
                consecNums.push(arr[j]);
                j++;
                if(sum == t){
                    canSum.push([...consecNums]);
                }
            }else{
                break;
            }
        }
        
    }
    return canSum;
}


console.log(conseqSum(target,arr1))