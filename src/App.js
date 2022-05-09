import { useEffect, useState } from "react";
import "./App.css";
import Slider from "./components/Slider";

const data = require("./data/male-30-34.json");

export default function App() {
  const [score, setScore] = useState();
  const [strengthScore, setStrengthScore] = useState();
  const [enduranceScore, setEnduranceScore] = useState();
  const [cardioScore, setCardioScore] = useState();

  useEffect(() => {
    setScore(strengthScore + enduranceScore + cardioScore);
  }, [strengthScore, enduranceScore, cardioScore]);

  function handleStrength(val) {
    setStrengthScore(val);
  }
  function handleEndurance(val) {
    setEnduranceScore(val);
  }
  function handleCardio(val) {
    setCardioScore(val);
  }

  return (
    <>
      <h2 className="score">{score}</h2>
      <div className="container-horizontal">
        <div className="container-vertical">
          <h3>Strength</h3>
          <select>
            <option>Pushups</option>
            <option>Hand-release</option>
          </select>
          <Slider data={data.strength.pushups} handler={handleStrength} />
        </div>
        <div className="container-vertical">
          <h3>Endurance</h3>
          <select>
            <option>Situps</option>
            <option>Plank</option>
            <option>Crunches</option>
          </select>
          <Slider data={data.endurance.situps} handler={handleEndurance} />
        </div>
        <div className="container-vertical">
          <h3>Cardio</h3>
          <select>
            <option>HAMR</option>
            <option>Run</option>
            <option>Walk</option>
          </select>
          <Slider data={data.cardio.hamr} handler={handleCardio} />
        </div>
      </div>
    </>
  );
}
