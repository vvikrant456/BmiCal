import React from 'react';
import { useState } from 'react';

function Bmi() {
  // let textStyles = {
  //   color: '',
  // };

  let [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const [bmi, setBmi] = useState('');

  const [healthstatus, setHealthtatus] = useState('');

  const handleWeight = (e) => {
    // console.log(e.target.value);
    setWeight(e.target.value);
  };

  const handleHeight = (e) => {
    // console.log(e.target.value);
    setHeight(e.target.value);
  };

  const handleSubmit = (event) => {
    // event.preventDefault();
    height = height / 100;
    let bmical = weight / (height * height);
    bmical = parseFloat(bmical).toFixed(1);
    if (bmical > 0 && bmical < 18.5) {
      setHealthtatus('You are Underweight');
    }

    if (bmical >= 18.5 && bmical < 25) {
      setHealthtatus('You are Healthy');
    }

    if (bmical >= 25 && bmical < 30) {
      setHealthtatus('You are Overweight');
    }

    if (bmical >= 30 && bmical < 35) {
      setHealthtatus('You are in Obsity class l');
    }

    if (bmical >= 35 && bmical < 40) {
      setHealthtatus('You are in Obesity class ll');
    }

    if (bmical >= 40) {
      setHealthtatus('You are in Obesity class lll');
    }

    console.log(bmical);
    setBmi(bmical);
  };

  return (
    <div className="bmi">
      <form action="#" className="form" onSubmit={handleSubmit}>
        <div className="form__group">
          <label htmlFor="height">Height&emsp; </label>
          <input
            onChange={handleHeight}
            type="number"
            className="form__input"
            id="height"
            autoComplete="none"
            value={height}
            placeholder="Enter your height  (in centimeter) "
            required
          />
        </div>
        <div className="form__group">
          <label htmlFor="weight">Weight &emsp;</label>
          <input
            onChange={handleWeight}
            type="number"
            className="form__input"
            id="weight"
            autoComplete="none"
            value={weight}
            placeholder="Enter your weight (in Kg.)"
            required
          />
          <button className="btn" type="submit">
            Calculate
          </button>
        </div>
      </form>

      <div className="textGroup">
        <h4 className="result">
          Your BMI &nbsp;:<span className="result-bmi"> {bmi}</span>
        </h4>
        <h4 className="result">
          Your Weight Status &nbsp;:
          <span className="result-status"> {healthstatus}</span>
        </h4>
      </div>
    </div>
  );
}

export default Bmi;
