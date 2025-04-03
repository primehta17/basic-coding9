// Replace First Occurrence of a Character in a String
let str= 'Mr Red has a red house and a red car'
let newArr=[];
let word='';
let replacement='blue';
let target ='red';

for(let i=0;i<str.length;i++){
    if(str[i]==' '){
        newArr.push(word);
        word='';
    }else{
        word += str[i];
    }
}
newArr.push(word);
// console.log(newArr);

for(let i=0;i<newArr.length;i++){
    if(newArr[i] == target){
        newArr[i] = replacement;
    }
}
console.log(newArr)