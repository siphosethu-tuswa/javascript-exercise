let numbers = [1, 2, 3, 4, 5]

for (let i = 0; i < numbers.length; i++) {
 const element = numbers[i];
  console.log(element)
}

// : Write a while loop that counts down from 5 to 1 //

let count = 5
while (count >= 1) {
  console.log(count);
  count--;
}

for (let i = 2; i <= 5; i += 2) {
  console.log(i)
}


let sum = 0; 
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i]
}
console.log(sum);