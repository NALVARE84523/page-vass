import Ladders from "../commons/images/ladders.jpg";
import React, { useRef, useEffect, useState } from "react";

function Form() {
/*   const inputs = document.querySelectorAll(".input");
  function add() {
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
  }

  function rem() {
    let parent = this.parentNode.parentNode;
    if (this.value === "") {
      parent.classList.remove("focus");
    }
  }

  inputs.forEach((input) => {
    input.addEventListener("focus", add);
    input.addEventListener("blur", rem);
  }); */

  const [getFocus, setFocus] = useState(false);
/*   const [getBlur, setBlur] = useState(true); */

  const focus = () => {
    if(getFocus === false) {
      setFocus(true);
    } else {
      setFocus(false);
    }
  }

  return (
    <form className="form-vass bg-black">
      <div className="d-flex flex-column flex-lg-row">
        <div className="col-lg-5 d-flex flex-column">
          <div className={getFocus ? "container-form focus" : "container-form"}>
            <div className="div">
              <h5>Nombres y apellidos</h5>
              <input onFocus={focus} onBlur={focus} type="text" className="input" />
            </div>
          </div>
          <div className={getFocus ? "container-form focus" : "container-form"}>
            <div className="div">
              <h5>Email</h5>
              <input onFocus={focus} onBlur={focus} type="email" className="input" />
            </div>
          </div>
          <div className={getFocus ? "container-form focus" : "container-form"}>
            <div className="div">
              <h5>Empresa/Organismo</h5>
              <input onFocus={focus} onBlur={focus} type="text" className="input" />
            </div>
          </div>
          <div className={getFocus ? "container-form focus" : "container-form"}>
            <div className="div">
              <h5>Pais</h5>
              <input onFocus={focus} onBlur={focus} type="text" className="input" />
            </div>
          </div>
        </div>
        <div className="col-lg-5 d-flex flex-column">
          <div className={getFocus ? "container-form focus" : "container-form"}>
            <div className="div">
              <h5>Telefono</h5>
              <input onFocus={focus} onBlur={focus} type="phone" className="input" />
            </div>
          </div>
          <div className={getFocus ? "container-form focus" : "container-form"}>
            <div className="div">
              <h5>Mensaje</h5>
              <input onFocus={focus} onBlur={focus} type="text" className="input" />
            </div>
          </div>
          <div>
            <input type="submit" value="Enviar" />
          </div>
        </div>
      </div>
    </form>
  );
}

export default Form;
