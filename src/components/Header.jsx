import Logo from "../commons/icons/logo-vass.png";
import Glass from "../commons/icons/glass.png"
import Burguer from "../commons/icons/menu.png"
import React, { useRef, useEffect, useState } from "react";

function Header() {
  const btnBurguer = useRef(null);
  const dropdown = useRef(null);
  const btnB = btnBurguer.current;
  const drop = dropdown.current;
  const [getClick, setClick] = useState(false);
  const [getPaises, setPaises] = useState(false);

  const animation = () => {
    if(getClick === false) {
      setClick(true)
    } else {
      setClick(false);
    }
  }

  const [getScroll, setScroll] = useState(false);

  const handleScroll = (e) => {
    const bottom = e.target.scrollTop > 0;
    if (bottom) { 
      setScroll(true);
     }
  }

  const paises = () => {
    if(getPaises === false) {
      setPaises(true)
    } else {
      setPaises(false);
    }
  }
  const paises1 = () => {
    if(getPaises === true) {
      setPaises(false)
    } else {
      setPaises(true);
    }
  }

  return (
    <header className="header" onScroll={handleScroll}>
      <nav className="header-mobile justify-content-between p-3 d-flex d-lg-none">
        <div className="header-logo">
          <a href="/">
            <img src={Logo} alt="" />
          </a>
        </div>
        <div className="header-icons d-flex">
          <button className="header-seeker border-0" ><img className="w-100 h-100 p-1" src={Glass} alt="" /></button>
          <button className="header-burguer border-0" ref={btnBurguer} onClick={animation} ><img className="w-100 h-100" src={Burguer} alt="" /></button>
        </div>
        <div  className={getClick ? "dropdown-menuu visible" : "dropdown-menuu"} ref={dropdown}>
          <div>
            <ul>
              <li><a href="/">home</a></li>
              <li><a href="/">casos de exito</a></li>
              <li><a href="/">mercados</a></li>
              <li><a href="/">como lo hacemos</a></li>
              <li><a href="/">somos vass</a></li>
              <li><a href="/">insights</a></li>
              <li><a href="/">contacto</a></li>
              <li><a href="/">vass research</a></li>
              <li><a href="/">talento</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <div className={getPaises ? "header-desktop header-black justify-content-between p-3 d-none d-lg-flex" : "header-desktop justify-content-between p-3 d-none d-lg-flex"}>
        <div className="header-logo ">
          <a href="/">
            <img src={Logo} alt="" className="h-100" />
          </a>
        </div>
        <div className="header-list d-flex align-items-center">
          <ul className="d-flex p-0">
            <li><a href="/">Casos de exito</a></li>
            <li className="mercados"><p>Mercados</p></li>
            <li className={getPaises ? "paises paises-visible" : "paises"}>
              <p  onMouseOver={paises} onMouseOut={paises1}>Paises</p>
              <div className="list-country d-flex flex-column justify-content-center">
                <ul>
                  <li className="col-2"><a href="/">Chile</a></li>
                  <li className="col-2"><a href="/">Colombia</a></li>
                  <li className="col-2"><a href="/">Mexico</a></li>
                  <li className="col-2"><a href="/">Peru</a></li>
                  <li className="col-2"><a href="/">Reino Unido</a></li>
                  <li className="col-2"><a href="/">Benelux</a></li>
                </ul>
              </div>
            </li>
            <li className="somos"><p >Somos VASS</p></li>
            <li><a href="/">Como lo hacemos</a></li>
            <li><a href="/">Insights</a></li>
            <li><a href="/">Noticias</a></li>
            <li><a href="/">VASS Research</a></li>
          </ul>
        </div>
        <div className="header-languages d-flex">
          <h2 className="d-flex align-items-center">en</h2>
          <img src={Glass} className="w-100 h-100" alt="" />
          <a href="/">Talento</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
