// ***** LOOPS *****

/*
1. for loops - use when number of iterations is known
2. while loops
3. do-while loops
4. for..in loops - use to iterate over objects properties
5. for..of loops - for iterating through iterable objects
*/


// use of for loops
for (let i=0; i<10; i++) {
    console.log(i);
}

// use of while loop
let a = 0;
while(a<5) {
    console.log("Hello");
    a++;
}

// use of for..in loop
const obj = {
    name: "Arka",
    age: 20
};

for (let prop in obj) {
    console.log(obj[prop]);
}

// use of for..of loop
let arr = [100, 200, 300, 400];

for (let ind in arr){
    console.log(arr[ind]);
}

for (let index of arr){
    console.log(index);
}

/*
Ques: why for..in loop is not recommended for iterables and only for objects
Ans:
*/