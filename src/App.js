import { useState } from 'react'
import './App.css'
const data = require("./data/male-30-34.json");

function App() {
  const [value, setValue] = useState();

  const values = data.cardio.hamr.reps;
  const max = data.cardio.hamr.reps.length;



  return (
    <>
    <input type="range" list="tickmarks" min={0} max={max} id="slider" onChange={e=>setValue(e.target.value)} orient="vertical" />

    {/* <datalist id="tickmarks">
      {values.map(v => {
        return <option value={v} key={v} />
      })}
    </datalist> */}

    <h3>{value}</h3>
    </>
  );
}

export default App;
