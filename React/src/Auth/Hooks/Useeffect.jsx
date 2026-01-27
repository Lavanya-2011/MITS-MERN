import React, { useEffect, useState } from 'react';

const Useeffect = () => {
    const [count,setCount]= useState(0);
    const [value,setValue]= useState(10);
  useEffect(() => {
    console.log("useEffect Mounted");
  }, [count]);

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>inc</button>
        <h1>{value}</h1>
        <button onClick={()=>setValue(value+1)}>inc</button>
    </div>
  )
}

export default Useeffect;