function fruit(){
    alert("banana")
}

function Header(){

    let name = "Tejas"

    let a,b,opr
    let val=0

    function Calc(a,b,opr){
        if (opr=='+') return a+b
        if (opr=='-') return a-b
        if (opr=='*') return a*b
        if (opr=='/') return a/b
    }

    function fruit(){
        alert("apple")
    }

    return <div>
        <h4>header file</h4>
        <br></br>
        {name?name:"not"}<br></br>
        <input type="number" value={a}></input><br></br>
        <input type="number" value={b}></input><br></br>
        <input type="text" value={opr}></input><br></br>
        <button onClick={()=>val=Calc(a,b,opr)}>Calculate</button>
        <br></br>
        <h2>Val:{val}</h2>
        {/* <button onClick={fruit}>Apple</button> */}
    </div>
}

export function Login(){
    return(
        <div>
            <h2>Login Component</h2>
        </div>
    )
}

export function Profile(){
    return(
        <h2>Profile Component</h2>
    )
}

export default Header