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

  let a = 30,
    b = 10;

  console.log(a, b);

  a = a + b;
  console.log(a, b);

  b = a - b;
  console.log(a, b);

  a = a - b;

  console.log(a, b);
};

main();
