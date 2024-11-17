import { useEffect, useMemo, useState } from "react";
import React from "react";


const AboutPage = ({mode}:{mode: String}) => {

  const [setData] = useState<any>([]);

  const fetch_product = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setData(data);
    console.log("Call Again");
    return data;
  }

  const [counter,setCounter] = useState<number>(0);
  // const [other,setOther] = useState<number>(0);

  useEffect(() => {
    fetch_product();
  },[])

  const expensiveCalculation = (num: number) => {
    console.log('Running expensive calculation...');
    let result = 0;
    for (let i = 0; i < 1_000_000_000; i++) {
      result += i;
    }
    return result + num;
  };
  
  //Memo dependency value and control function or Components
  const memoizedResult = useMemo(() => expensiveCalculation(9), []);

  return (
    <div>AboutPage
      {mode}
      <h1>{memoizedResult}</h1>
      <button onClick={() => setCounter(counter + 1)}>{counter}</button>
      <h2>API Call</h2>
    </div>
  )
}

export default React.memo(AboutPage)