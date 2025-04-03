// program to split string in array by spaces
let str="I am good at Learning";
let word='';
let newArr=[];
for(let i=0;i<str.length;i++){
    if(str[i]==' '){
        newArr.push(word);
        word='';  
    }else{
        word += str[i];
    }
}
newArr.push(word);
console.log(newArr);