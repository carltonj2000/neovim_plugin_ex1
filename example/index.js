const myFunction = () => {
  console.log("foo");
  const myOtherFunction = () => {
    console.log("bar");
  };

  myOtherFunction();
  console.log("end");
};

myFunction();
