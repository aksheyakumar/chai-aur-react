//map aur filter  jab bhi chalte h toh ek naaya array return krte h
let arr = [1,2,3,4,5]
//map - har element par kuch karo and naye array mein rakho

//map ke ander return krne ke wajah se hi element naye array me place hote h
const ans = arr.map(val => val*23)
// console.log(ans);
//map tab use krenge jab bhi kisi ek element pr yaa pure element pr kuch perfrom krna hoo

//ek array h saare number joki 5 se bade ho unme 5 jod dena and baaki number waise return krna naye array me

var state = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]

const utar = state.map( (val)=>{
    if(val>5){
       return val+5;
    }
    else{
        return val;
    }
} )
// console.log(utar);

//map aur filter me ek hi farak h,map saare bande lautata h mtlb count kam nhi hoga,filter bando ko kam kr skta h

//jab og array ka size kam naa hoo to waha map ka use hoga

//jab og array ka size kam krna h toh waaha filter ka use hota h


let giyt = [
    {product:"pixel",price:1234456},
    {product:"pixel 2 pro",price:1236},
    {product:"pixel 9pro",price:143536},
    {product:"pixel 9 pro xl",price:156}
]

 const alter =  giyt.filter(elem => elem.price>1234)
 console.log(alter);