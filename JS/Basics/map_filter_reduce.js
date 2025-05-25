// MAP, FILTER, REDUCE


// +-----------------+ MAP +-----------------+
 
let arr = [45, 21, 23];
let a = arr.map((value, index)=> {
    console.log(value, index);
    return value+1;
})
console.log(a);

// difference between "map" and "forEach"
// map is used when we have to make a new array and forEach is used when we have to do some operation on the xisting elements of an array

// +-----------------+ FILTER +-----------------+

let arr2 = [0,1,2,3,4,5,6,7,8,9];
let a2 = arr2.filter((value) => {
    return value%2 == 0;
})
console.log(a2);


// +-----------------+ REDUCE +-----------------+

let arr3 = [1,2,3,4,5,1];
let a3 = arr3.reduce((v1,v2)=>{
    return v1+v2
})
console.log(a3);


// Reduce returns a value, filter and map both returns an array

