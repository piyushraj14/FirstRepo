import React from "react";

function mul() {
  const sub = (a, b) => {
    console.log(a * b);
  };
  return <div>{sub(5, 10)}</div>;
}

export default mul;
