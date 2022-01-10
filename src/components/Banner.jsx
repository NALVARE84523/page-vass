import Ladders from "../commons/images/ladders.jpg"

function Banner() {
  return (
    <div className="banner w-100 vh-100">
        <img className="glass w-100 h-100" src={Ladders} alt="" />
        <a className="contact" href="/">Contacto</a>
    </div>
  );
}

export default Banner;