import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header, { Login, Profile } from './Header'
import Counter from './Counter'
import Input from './input'

function App() {
  const [hide, setHide] = useState(true)
  let name="Tejas"
  return (
    <>

      {/* <Header></Header> */}
      <h2>{"{"} hello {"}"}</h2>
      {/* <Login></Login> */}
      {/* <Profile></Profile> */}


      <button onClick={()=>setHide(!hide)}>Show/Hide</button>
      {/* {hide?<Counter name={name}><h2>This is children part</h2></Counter>:null} */}

      <Input></Input>
    </>
  )
}

export default App
