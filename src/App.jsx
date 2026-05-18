import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header, { Login, Profile } from './Header'
import Counter from './Counter'

function App() {
  const [hide, setHide] = useState(true)

  return (
    <>

      {/* <Header></Header> */}
      <h2>{"{"} hello {"}"}</h2>
      {/* <Login></Login> */}
      {/* <Profile></Profile> */}


      <button onClick={()=>setHide(!hide)}>Show/Hide</button>
      {hide?<Counter />:null}
    </>
  )
}

export default App
