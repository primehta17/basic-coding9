// Check Occurrence of a Character Using for Loop

let str='schools',count=0;

for(let i=0;i<str.length;i++){
    if(str.charAt(i)==='s'){
        count++;
        console.log(str.charAt(i)+" "+str[i]);
    }
}
console.log(count)