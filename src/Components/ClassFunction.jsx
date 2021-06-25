import React, {useState} from 'react';

const ClassFunction = () => {
const[count,setCount] = useState(0);  
    return (
        <div style = {{textAlign: "center"}}>
           <h1>Count: {count}</h1> 
           <button onClick ={() => setCount(count + 1)}>Increase</button>
           &nbsp;
           <button onClick ={() => setCount (count - 1)}>Decrease</button>
        </div>
    );
}

export default ClassFunction;
