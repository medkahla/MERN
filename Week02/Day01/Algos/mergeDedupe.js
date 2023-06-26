const arr1 = [1, 3, 3, 5, 8, 10];
const arr2 = [1, 3, 3, 5, 8, 10, 10, 10];


function mergeDedupe(arr1, arr2) {

    let merged = [];
    let indexOne = 0;
    let indexTwo = 0;

    while(indexOne < arr1.length && indexTwo < arr2.length){
        let one = arr1[indexOne];
        let two = arr2[indexTwo];

        if (one == two){ // if they're equal
            if(merged[merged.length-1] !== one){
                merged.push(one)
            }
            indexOne++
            indexTwo++
    } else if(one < two){// if one is smaller, only check and potentially push one
        if(merged[merged.length-1] !== one){
            merged.push(one)
        }
        indexOne++ 
    } else if (merged[merged.length -1] !== two){
        merged.push(two)
        indexTwo++
    }else{
        indexTwo++
    }
    
    }
    while(indexOne < arr1.length){
        let one = arr1[indexOne]
        if(merged[merged.length-1] !== one){
            merged.push(one)
        }
        indexOne++
    }

    while(indexTwo < arr2.length){
        let two = arr2[indexTwo]
        if(merged[merged.length-1] !== two){
            merged.push(two)
        }
        indexTwo++
    }

    return merged
}

console.log(mergeDedupe(arr2, arr1));