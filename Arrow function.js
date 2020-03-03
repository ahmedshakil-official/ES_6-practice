const double= function (num) {
    return num*2;
};
const cube=num=>3*num;

const add =(a,b)=>a+b;
const res=double(5);
const result=cube(3);
const sum=add(2,4);
const avg=(a,b,c)=>{
    let added=a+b+c;
    let average=added/3;
    return average;
};
const return7=()=>7;
console.log(res);
console.log(result);
console.log(sum);
console.log(return7());
const average=avg(1,2,4);
console.log(average);