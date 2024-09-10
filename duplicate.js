let a=[1,2,2,3,4,4,5,6,6,7]
let s=[]
for(let i=0;i<a.length;i++){
    if(!s.includes(a[i])){
        s=s+" " +a[i]
    } 
}
console.log(s);
