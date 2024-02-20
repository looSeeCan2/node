///CHATGPT LESSONS
///Swap two variables without using a temp variable
let x = 25,
  y = 90;

console.log(x, y);

x += y;
console.log(x, y);
y = x - y;
console.log(x, y);
x -= y;
console.log(x, y);

///Try with 3
let a = 11,
  b = 55,
  c = 23; ///expected out put (11, 55, 23) = (23, 11, 55)

a += b + c;
console.log(a, b, c);
b = a - b - c;
console.log(a, b, c);
c = a - b - c;
console.log(a, b, c);
a = a - b - c;
console.log(a, b, c);

///Find the average of three numbers and store it in a varable
const num1 = 10,
  num2 = 20,
  num3 = 30;

let average = (num1 + num2 + num3) / 3;
console.log(average);
