
// Converting an array to String

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let strNum = " ";


for (let i = 0; i < numbers.length; i++) {
    strNum = strNum + numbers[i];
}


console.log(strNum);
console.log(typeof strNum);

// Reversing an array 

let reversedArray = [];
for(let j = numbers.length-1; j>= 0; j++){
  reversedArray.push(numbers[j]);
}
console.log(reversedArray);