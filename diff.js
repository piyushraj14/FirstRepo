import React from "react";

function diff() {
  const sub = (a, b) => {
    console.log(a + b);
  };
  return <div>{sub(5, 10)}</div>;
}

export default diff;
