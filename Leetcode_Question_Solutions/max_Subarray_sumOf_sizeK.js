function max_Subarray_sumOf_sizeK(nums , k)
{
    let i = 0 , j = 0;
    let mp = new Map();
    let sum = 0 , ans = 0;
    
    while(j < nums.length)
    {
        sum += nums[j];
        
        mp.set(nums[j] , (mp.get(nums[j]) || 0) + 1);
        
        if(j-i+1 === k)
        {
            if(mp.size === k)  // if k distinct element present
            {
                ans = Math.max(ans , sum);
            }
            
            sum -= nums[i];    // remove front element from window
            mp.set(nums[i] , mp.get(nums[i]) -1);
            if(mp.get(nums[i]) === 0) mp.delete(nums[i]);
            i++;
        }
        j++;
    }
    
    return ans;
}

let arr = [1,5,4,2,9,9,9];
let k = 3;
let res = max_Subarray_sumOf_sizeK(arr , k);
console.log("Maximum subarray sum of size k : " , res);