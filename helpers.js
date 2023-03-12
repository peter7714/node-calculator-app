function stringsToNumArr(arr){
    if(arr === []){
        return 0;
    }
    let nums = [];
    for (let i=0; i<arr.length; i++){
        let num = Number(arr[i]);
        if (num === NaN){
            return new Error(`${i} is not a number`);
        }
        nums.push(num);
    }
    return nums;
}

function mean(nums){
    let total = 0;
    for(let i=0; i<nums.length; i++){
        total += nums[i];
    }
    return total/nums.length;
}

function findMedian(nums){
    let sortedNums = nums.sort((a, b)=>{return a - b});

    let middleIndex = Math.floor(nums.length / 2);
    let median;

    if (sortedNums.length % 2 === 0){
        median = (sortedNums[middleIndex] + sortedNums[middleIndex - 1]) / 2;
    } else {
        median = sortedNums[middleIndex];
    }
    return median;
}

function getMaxValueKey(obj){
    return Object.keys(obj).reduce((a,b)=> obj[a]>obj[b] ? a : b);
}

function mode(nums){
    let freqCounter = {};
    for(let key of nums){
        if(freqCounter[key]){
            freqCounter[key]++
        } else {
            freqCounter[key] = 1;
        }
    }
    return `${getMaxValueKey(freqCounter)} was the most common number, it appeared ${freqCounter[getMaxValueKey(freqCounter)]} times`;
}

module.exports = {
    stringsToNumArr,
    mean,
    findMedian,
    mode
}