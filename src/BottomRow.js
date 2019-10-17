import React, {useState} from "react";
import "./App.css";

const BottomRow = () => {
const [down, setDown] = useState(1);
const [yards, setYards] = useState(10);
const [ballOn, setBallOn] = useState(42);
const [quarter, setQuarter] = useState(1);
const [sideofField, setSideOfField] = useState('Home Side');

const changeDown = e =>{
  if (down < 4){
    setDown(down + 1);
  }
};

const addFive = e =>{
  setYards(yards + 5);
  setBallOn(ballOn - 5);
};

const changeSide = e=>{
  if (sideofField === 'Home Side'){
    setSideOfField('Away Side');
  } else {
    setSideOfField('Home Side');
  }
};

const changeQuarter = e =>{
  if (quarter < 4){
    setQuarter(quarter + 1);
  }
};

  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{down}</div>
        <button className="homeButtons__touchdown" onClick={changeDown}>Next Down</button>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">{yards}</div>
        <button className="homeButtons__touchdown" onClick={addFive}>5 Yard Penalty</button>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">{ballOn}</div>
        <button className="homeButtons__touchdown" onClick={changeSide}>{sideofField}</button>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarter}</div>
        <button className="homeButtons__touchdown" onClick={changeQuarter}>Next Quarter</button>
      </div>
    </div>
  );
};

export default BottomRow;
