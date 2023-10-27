import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import imguno from './assets/images/1final.png';





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <div className='cidbox'>
          <div className='anima'>
            <div className='uno'></div>
            <div className='dos'></div>
            <div className='tres'></div>
            <div className='menu'></div>
            <div className='degradadoLogo'></div>
            <div id='cid'></div>
            
          </div>
        </div>
      </header>

    <div className='main'>
      <div className='display'>
          <p className='text'>agencia<span className='cross'>+</span></p>
        </div>

        <div className='display'>
          <p className='text'>dev<span className='cross'>+</span></p>
        </div>

        <div className='display'>
          <p className='text'>mkt<span className='cross'>+</span></p>
        </div>

        <div className='display'>
          <p className='text'>escuela<span className='cross'>+</span></p>
        </div>
    </div>
      

      <div className='nosotros'>
        <div className='nosotros-wrap'>
          <p className='nosotros-sobre'>sobre nosotros</p>
          <p className='nosotros-centro'>CENTRO INTEGRAL<br/>DE DISEÑO</p>
          <p className='nosotros-somos'>Somos una agencia de diseño líder que combina estrategia, creatividad y tecnología para brindar soluciones visuales y digitales impactantes. Con un enfoque centrado en el usuario, ofrecen servicios integrales que incluyen branding, diseño gráfico, desarrollo web y marketing digital, ayudando a las marcas a destacar y prosperar en el mundo digital.</p>
        </div>
      </div>

      <footer>
        <div className='degradado'></div>

        <div className='interes'>
          <p className='interes-nosotros'>¿estas interesado?<br/>platica con nosotros</p>
        </div>

        <div className='whatsbox'>
          <div className='whats'>
            <input className='input-decorado' type="text" placeholder='manda un mensaje'/>
            <div className='whatsIcon'></div>
          </div>
        </div>
        

        <div className='interes-queremos'>
          <p>queremos ayudarte a crear tu proyecto</p>
        </div>

        <div className='interes-copyr'>
          <p>©copyright 2023 CID</p>
        </div>
        
      </footer>

      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more ohh yes

      </p> */}
    </>
  )
}

export default App
