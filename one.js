// Loop Through Object Using for...in and put that in array
let obj={
    5:"abc",
    2:"cgf",
   steps: function(){
        console.log("steps in fun")
    }
}

let arr1=[],arr2=[];
for(let i in obj){
    console.log("key : " + i +"value : "+ obj[i])
    arr2.push(i)
    arr1.push(obj[i]);
}
console.log(arr1);
console.log(arr2);