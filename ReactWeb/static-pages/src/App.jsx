import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './Components/Greeting';
import About from './Components/About';

function App() {
  /*  const [count, setCount] = useState(0) */

  return (
    <>
      <div>
        <Greeting />
        <About />
      </div>


    </>
  );
}

export default App
