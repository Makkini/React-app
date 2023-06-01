import React from 'react';
import classes from  './Counter.module.scss'
export const Counter = () => {
  const [cnt, setCnt] = React.useState(0);
  const increment = () => {
    setCnt(cnt + 1);
  };
  return (
    <div>
      <h1>{cnt}</h1>
      <button className={classes.button} onClick={increment}>BUTTON</button>
    </div>
  );
};
