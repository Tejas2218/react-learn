import { useState } from "react"

function Input(){
    let [inName, setInName] = useState("")
    return(
        <div>
            <input type="text" onChange={(event)=>setInName(event.target.value)} value={inName}  placeholder="Enter Name" />
            <h2>{inName}</h2>
            <button onClick={()=>setInName("")}>Clear</button>
        </div>
    )
}

export default Input