const Controles = ({ onGol, onAmarilla, onRoja, onReset}) => {
  return (
    <div className="controles">
      <div>
        <h3>Local</h3>
        <button onClick={() => { onGol('local') }}>⚽ Gol</button>
        <button onClick={() => { onAmarilla('local') }}>🟨 Amarilla</button>
        <button onClick={() => { onRoja('local') }}>🟥 Roja</button>
      </div>
      <div>
        <h3>Visitante</h3>
        <button onClick={() => { onGol('visitante') }}>⚽ Gol</button>
        <button onClick={() => { onAmarilla('visitante') }}>🟨 Amarilla</button>
        <button onClick={() => { onRoja('visitante') }}>🟥 Roja</button>        
      </div>
      <button onClick={() => {onReset()}}>🔄 Reset The Game 🔄</button>
    </div>
  )
}

export default Controles