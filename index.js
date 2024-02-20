const main = async () => {
  const fetchData = async () => {
    try {
      const response = await fetch("./data.json");
      console.log(response);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      // alert(error);
    }
  };

  const sfData = await fetchData();
  console.table(sfData);

  // setTimeout(() => {
  //   console.log("Hello after 4 seconds");
  // }, 4000);

  // ///does the same as the above
  // const lucycan = (who) => console.log(`${who} rocks😊`);
  // setTimeout(lucycan, 4000, "Lucycan");

  ///challenge1

  // const theOneFunc = (item1) => {
  //   console.log(item1);
  // };

  // setTimeout(theOneFunc, 4000, "Hello after 4 seconds.");
  // setTimeout(theOneFunc, 8000, "Hello after 8 seconds.");

  // setInterval(() => {
  //   console.log("Hello every 3 seconds");
  // }, 3000);

  // const lucycan1 = (item1) => {
  //   console.log(item1);
  // };

  // setInterval(lucycan1, 3000, "Lucycan every 3 sec");

  ///challenge2

  // let counter = 0;
  // const intervalid = setInterval(() => {
  //   if (counter < 5) {
  //     console.log("Hello World every second and stop after 5 times");
  //     counter++;
  //   } else {
  //     clearInterval(intervalid);
  //     console.log("Done");
  //   }
  // }, 1000);

  ////////////////// 9-more-challenges.txt

  ///Challenge 1
  ///Solution from ChatGpt

  // function helloWorldIncrementally() {
  //   const greeting = `Hello World ${count} ${delay}`;
  //   console.log(greeting);
  //   count++;
  //   delay += 1000;

  //   setTimeout(helloWorldIncrementally, delay); ///recursive pattern
  // }

  // helloWorldIncrementally();

  ///Solution from exercise files

  // const greeting = (delay) => {
  //   setTimeout(() => {
  //     console.log(`Hello World. ${delay}`);
  //     greeting(delay + 1);
  //   }, delay * 1000);
  // };

  // greeting(1);

  //////////////
  // let count = 1;
  // const greeting = () => {
  //   console.log("Hello World");
  //   count++;
  //   count <= 10 ? greeting() : console.log("count is greater than 10");
  // };

  // greeting();

  ///Challenge 2

  // const greeting2 = (delay) => {
  //   setTimeout(() => {
  //     for (let i = 0; i < 5; i++) {
  //       console.log(`Hello World. ${delay}`);
  //     }
  //     greeting2((delay += 100));
  //   }, delay);
  // };

  // greeting2(100);

  // let lastIntervalid,
  //   counter = 5;
  // const greeting3 = (delay) => {
  //   if (counter === 5) {
  //     clearInterval(lastIntervalid);
  //     lastIntervalid = setInterval(() => {
  //       console.log(`Hello World. ${delay}`);
  //       greeting3(delay + 100);
  //     }, delay);
  //     counter = 0;
  //   }
  //   counter += 1;
  // };
  // greeting3(100);

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

  ///Try with strings
  let string = "red",
    string2 = "blue";

  console.log(string, string2);

  // Swap the values of a and b.
  [string, string2] = [string2, string];

  console.log(string, string2);

  ///Find the average of three numbers and store it in a varable
  const num1 = 10,
    num2 = 20,
    num3 = 30;

  let average = (num1 + num2 + num3) / 3;
  console.log(average);

  ///Swap using array deconstructoring
  let num4 = 78,
    num5 = 2,
    num6 = 88;

  [num4, num5, num6] = [num6, num4, num5];
  console.log(num4, num5, num6);

  ///Given an integral number, determine if it is a perfect square
  function isSquare(n) {
    const square = Math.sqrt(n); ///squares the number
    console.log(square);
    if (Number.isInteger(square)) {
      ///if the number is an integer
      return true; ///if the number is an integer then it is true that the number passed in is a perfect square
    } else {
      return false;
    }
  }

  const e = isSquare(8);
  console.log(e);

  ///I want to replicate^ without using methods
  function isSquare1(n) {
    console.log(n);
    for (let i = 0; i ** 2 <= n; i++) {
      if (i ** 2 === n) {
        return `${i} squared = ${n}`;
      }
    }
    return "false";
  }
  const f = isSquare1(81);
  console.log(f);

  ///sort a given array. no methods or functions

  let numArr = [50, 20, 100, 3, 4];

  for (let i = 0; i < numArr.length; i++) {
    for (let j = 0; j < numArr.length; j++) {
      if (numArr[i] < numArr[j]) {
        let newNum = numArr[i];
        numArr[i] = numArr[j];
        numArr[j] = newNum;
      }
    }
    console.log(numArr);
  }
};

main();
