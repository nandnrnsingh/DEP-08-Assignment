function FindLongestWord(word) {
    word = word + " ";
    
    let ans = "" , curr = "";
    
    for(let i =0 ; i < word.length; i++)
    {
        let ch = word[i];
        if(ch === ' ')
        {
            if(curr.length > ans.length)
            {
                ans = curr;
            }
            curr = "";
        }
        else{
            curr = curr + ch;
        }
    }
    
    return ans;
}

let word = prompt("Enter a sentence:\n");
let longestWord = FindLongestWord(word);
console.log("curr word in sentence is: " + longestWord);