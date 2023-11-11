import "./App.css";
import bar from "./images/pattern-divider-desktop.svg";
import dise from "./images/icon-dice.svg";
import quatos from "./Quatos.json";
import { useEffect, useState } from "react";

function App() {

  const [quatosdata, setQuatosdata] = useState([]);

  const [randomQuatos, setrandomQuatos] = useState([]);

  useEffect(() => {

    setQuatosdata(quatos.quotes);

  }, [quatosdata]);

  const randomnumber = Math.floor(Math.random() * quatosdata.length);

  const random = quatosdata[randomnumber];

  const randomFun =  () => {

    console.log(random);

    console.log(randomnumber);

    setTimeout(()=>{

      setrandomQuatos(random);

    },600)

    // create blur effect

    let wrapper = document.getElementById("wrapper");

    wrapper.classList.add("blured");

    const timeout = 500;

    setTimeout(() => {

      wrapper.classList.remove("blured");

    }, timeout);
  };

  const randomOnload = () => {

    setrandomQuatos(random);
    
  };

  return (
    <div className="App" onLoad={randomOnload}>
      <div className="wrapper" id="wrapper">
        <p>ADVICE #{randomQuatos.id}</p>
        <h3>{randomQuatos.text}</h3>
        <img src={bar} alt="bar-line" className="bar" />
        <img src={dise} alt="dise" className="dise" onClick={randomFun} />
        <div className="dise-bg" onClick={randomFun}></div>
      </div>
    </div>
  );
}

export default App;
