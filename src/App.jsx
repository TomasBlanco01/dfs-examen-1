import { useState } from 'react'
import './App.css'
import Controles from './components/Controles'
import Display from './components/Display'

function App() {
  const [partido, setPartido] = useState({
    golesLocal: 0,
    golesVisitante: 0,
    amarillaLocal: 0,
    amarillaVisitante : 0,
    rojaLocal: 0,
    rojaVisitante : 0
  })

  const onGol = (equipo) => {
    if (equipo == 'local'){
      setPartido({ ...partido, golesLocal: partido.golesLocal + 1 })
    } else if (equipo == 'visitante'){
      setPartido({ ...partido, golesVisitante: partido.golesVisitante + 1 })
    }
  }

  const onAmarilla = (equipo) => {
    if (equipo == 'local'){
      setPartido({ ...partido, amarillaLocal: partido.amarillaLocal + 1 })
    } else if (equipo == 'visitante'){
      setPartido({ ...partido, amarillaVisitante: partido.amarillaVisitante + 1 })
    }
  }

  const onRoja = (equipo) => {
    if (equipo == 'local'){
      setPartido({ ...partido, rojaLocal: partido.rojaLocal + 1 })
    } else if (equipo == 'visitante'){
      setPartido({ ...partido, rojaVisitante: partido.rojaVisitante + 1 })
    }
  }

  const onReset = () => {
    setPartido({ ...partido, golesLocal: 0, golesVisitante: 0, amarillaLocal: 0, amarillaVisitante: 0, rojaLocal: 0, rojaVisitante: 0 })
  }

  return (
    <div className='container'>
      <h1>Partido</h1>
      <Controles onGol={onGol} onAmarilla={onAmarilla} onRoja={onRoja} onReset={onReset}/>
      <Display partido={partido} />
    </div>
  )
}

export default App
