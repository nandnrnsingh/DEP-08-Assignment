let findMaxVowelWord = () =>{
    let str = prompt("Enter a sentance:\n");
    
    str = str + " ";
    
    let ans = ""  , currWord = "";
    let maxVowel = 0 , count = 0;
    
    for(let i = 0 ; i < str.length; i++)
    {
        let ch = str[i].toLowerCase();
        
        if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u')
        {
            count++;
        }
        
        if(ch === ' ')
        {
            if(count > maxVowel)
            {
                maxVowel = count;
                ans = currWord;
            }
            count = 0;
            currWord = "";
        }
        else{
            currWord += ch;
        }
    }
    
   return ans;
}

let ans = findMaxVowelWord();
console.log("Word with max no. of vowels is : " + ans);