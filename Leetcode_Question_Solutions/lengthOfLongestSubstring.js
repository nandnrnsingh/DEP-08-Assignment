function length_Of_LongestSubstring(str){
    let mp = new Map();
    let n = str.length;
    
    let i = 0 , j = 0;
    
    let ans = 0;
    
    while(j < n)
    {
        //increse frequency of charactor in map
        if(mp.has(str[j]))
        {
            mp.set(str[j] , mp.get(str[j]) + 1);
        }
        else{
            mp.set(str[j] , 1);
        }
        
        while(mp.get(str[j]) > 1)
        {
            mp.set(str[i] , mp.get(str[i]) - 1);
            
            if(mp.get(str[i]) === 0){
                mp.delete(str[i]);
            }
            
            i++;
        }
        
        ans = Math.max(ans , j-i+1);
        j++;
    }
    
    return ans;
}


let str = prompt("Enter a string :\n");
// console.log(str);

let ans = length_Of_LongestSubstring(str);

console.log("Longest Substring Without Repeating Char is :" + ans);