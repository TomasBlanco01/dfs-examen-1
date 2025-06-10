const Controles = ({ onGol, onAmarilla, onRoja }) => {
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
    </div>
  )
}

export default Controles