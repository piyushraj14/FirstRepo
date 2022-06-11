import React from "react";

function add() {
  const sum = (a, b) => {
    console.log(a + b);
  };
  return <div>{sum(5, 10)}</div>;
}

export default add;
