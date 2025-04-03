// JavaScript Program to Count the Number of Vowels in a String     

let str="JavaScript program";
const vowels = ["a", "e", "i", "o", "u"]
let count=0;
for(let i=0;i<str.length;i++){
    for(let j=0;j<vowels.length;j++){
        if(str[i] == vowels[j]){
            count++;
        }  
    }
  
}
console.log(count);
