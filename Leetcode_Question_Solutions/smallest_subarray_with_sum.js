let minimum_Size_subarry_sum = (nums , target)=>{
    let sum = 0;
    let i = 0 , j = 0;
    let ans = 1e9+7;
    
    while(j < nums.length)
    {
        sum += nums[j];
        
        while(sum >= target)
        {
            ans = Math.min(ans , j-i+1);
            sum -= nums[i];
            i++;
        }
        j++;
    }
    return ans;
}

let nums = [2,3,1,2,4,3];
let target = 7;
let ans = minimum_Size_subarry_sum(nums , target);

console.log("minimum size subarray of sum <= target is:", ans);