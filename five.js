// JavaScript Program to Count the Number of Vowels in a String     

let str="I am good at Learning";
let vowels=['aeiou'];
let count=0;
for(let i=0;i<str.length;i++){
    for(let j=0;j<vowels.length;j++){
        if(str.charAt(i) == vowels[i]){
            count++;
        }
    }
}
console.log(count)