const Test = () => {
  const myArray = [
    {
      title: "hello",
      description: "lorem ipsum",
      id: 1,
    },
    {
      title: "world",
      description: "ipsum sit amen",
      id: 2,
    },
  ];

  const simpler = myArray.map((item) => item.title);

  let simplerArray = [];
  myArray.forEach((el) => {
    simplerArray.push(el.title);
  });

  console.log(myArray, simpler);

  return <div></div>;
};

export default Test;
