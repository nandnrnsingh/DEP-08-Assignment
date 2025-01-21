/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) 
{
    //calculate freq of each element

    let freqArr = {};   // create empty object

    nums.forEach((val) => {
        if(freqArr[val] == null)
        {
            freqArr[val] = 1;
        }
        else{
            freqArr[val] = freqArr[val] + 1;
        }
    });

    const arr = [];    // create arr of object {key , freq}

    for(let num in freqArr)
    {
        arr.push({num , count : freqArr[num]});
    }

    let sortedArr = arr.sort((a,b) => b.count - a.count);
    let firstKarr = sortedArr.slice(0,k);
    return firstKarr.map(a => Number(a.num));
};