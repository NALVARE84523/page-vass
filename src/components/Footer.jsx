import Ladders from "../commons/images/ladders.jpg"

function Footer() {
  return (
    <footer className="footer p-4 py-lg-5 p-lg-3 d-lg-flex">
        <div className="footer-copy m-lg-0 d-lg-flex align-items-lg-center">
            <p className="m-lg-0">Copyright <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> 2021 Todos los derechos reservados</p>
        </div>
        <div className="footer-info d-flex flex-wrap justify-content-center m-auto my-4 my-lg-0">
            <a href="/">Memoria ambiental</a>
            <a href="/">Politica de cookies</a>
            <a href="/">Politica de privacidad</a>
            <a href="/">Politica de calidad y medio ambiente</a>
        </div>
        <div className="footer-icons d-lg-flex align-items-center">
            <ul className="d-flex justify-content-center m-0">
                <li><a href="/" className="twitter">Twitter</a></li>
                <li><a href="/" className="linkedin">Linkedin</a></li>
                <li><a href="/" className="instagram">Instagram</a></li>
                <li><a href="/" className="youtube">Youtube</a></li>
            </ul>
        </div>
    </footer>
  );
}

export default Footer;