const main = async () => {
  console.log("message");

  const fetchData = async () => {
    try {
      const response = await fetch("./data.json");
      console.log(response);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  const sfData = await fetchData();
  console.table(sfData);
};

main();
