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


/*   const input = useRef(null);
  const container = useRef(null);
  const inputB = input.current;
  const containerB = container.current; */

  const [getFocus, setFocus] = useState(false);
  const [getName, setName] = useState("");
  const [getEmail, setEmail] = useState("");
  const [getCompany, setCompany] = useState("");
  const [getCountry, setCountry] = useState("");
  const [getPhone, setPhone] = useState("");
  const [getMessage, setMessage] = useState("");
/*const [getBlur, setBlur] = useState(true);*/






  return (
    <form className="form-vass bg-black">
      <div className="d-flex flex-column flex-lg-row">
        <div className="col-lg-5 d-flex flex-column">
          <div className={getFocus === "nombre" || getName.length > 0 ? "container-form focus" : "container-form"}>
            <div className="div">
              <h5>Nombres y apellidos</h5>
              <input name="nombre" onChange={(e) => setName(e.target.value)} onFocus={() => setFocus("nombre")} onBlur={() => setFocus("")} type="text" className="input" />
            </div>
          </div>
          <div className={getFocus === "correo" || getEmail.length > 0 ? "container-form focus" : "container-form"}>
            <div className="div">
              <h5>Email</h5>
              <input name="correo" onChange={(e) => setEmail(e.target.value)} onFocus={() => setFocus("correo")} onBlur={() => setFocus("")} type="email" className="input" />
            </div>
          </div>
          <div className={getFocus === "empresa" || getCompany.length > 0 ? "container-form focus" : "container-form"}>
            <div className="div">
              <h5>Empresa/Organismo</h5>
              <input name="empresa" onChange={(e) => setCompany(e.target.value)} onFocus={() => setFocus("empresa")} onBlur={() => setFocus("")} type="text" className="input" />
            </div>
          </div>
          <div className={getFocus === "pais" || getCountry.length > 0 ? "container-form focus" : "container-form"}>
            <div className="div">
              <h5>Pais</h5>
              <input name="pais" onChange={(e) => setCountry(e.target.value)} onFocus={() => setFocus("pais")} onBlur={() => setFocus("")} type="text" className="input" />
            </div>
          </div>
        </div>
        <div className="col-lg-5 d-flex flex-column">
          <div className={getFocus === "telefono" || getPhone.length > 0 ? "container-form focus" : "container-form"}>
            <div className="div">
              <h5>Telefono</h5>
              <input name="telefono" onChange={(e) => setPhone(e.target.value)} onFocus={() => setFocus("telefono")} onBlur={() => setFocus("")} type="phone" className="input" />
            </div>
          </div>
          <div className={getFocus === "mensaje" || getMessage.length > 0 ? "container-form focus" : "container-form"}>
            <div className="div">
              <h5>Mensaje</h5>
              <input name="mensaje" onChange={(e) => setMessage(e.target.value)} onFocus={() => setFocus("mensaje")} onBlur={() => setFocus("")} type="text" className="input" />
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
