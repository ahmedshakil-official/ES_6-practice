function add(a,b=10) {
    return a+b;
}
const total=add(10,20);
const result=add(10);
console.log(total+"\n",result);