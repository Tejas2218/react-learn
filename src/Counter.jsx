import { Children, useState } from "react"

function Counter(props){

    let [count, setCount] = useState(0)

    return <div>
        <h3>{props.name}</h3>
        <button onClick={() => setCount(count-1)}>-</button>
        <h2>Count: {count}</h2>
        <button onClick={() => setCount(count+1)}>+</button>
        {props.children}
    </div>
}

export default Counter