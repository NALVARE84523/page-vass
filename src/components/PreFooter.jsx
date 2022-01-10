import Ladders from "../commons/images/ladders.jpg"

function PreFooter() {
  return (
    <div className="pre-footer d-flex flex-row flex-wrap">
        <div className="pre-footer-container pre-footer-title col-12 col-md-2 d-flex flex-column justify-content-center align-items-end">
            <a className="mr-3" href="/">Complex made simple</a>
        </div>
        <div className="pre-footer-container pre-footer-vass col-6 col-md-3">
            <h3>Sitemap VASS</h3>
            <ul>
                <li> <a href="/">Home</a> </li>
                <li> <a href="/">Caso exito</a> </li>
                <li> <a href="/">Somos VASS</a> </li>
                <li> <a href="/">Impactos</a> </li>
                <li> <a href="/">Metodo</a> </li>
                <li> <a href="/">Tecnologias</a> </li>
                <li> <a href="/">Proyectos l + D + i</a> </li>
                <li> <a href="/">Insights</a> </li>
                <li> <a href="/">Noticias</a> </li>
                <li> <a href="/">VASS Research</a> </li>
                <li> <a href="/">Canal de denuncias</a> </li>
                <li> <a href="/">Contacto</a> </li>
            </ul>
        </div>
        <div className="pre-footer-container pre-footer-talent col-6 col-md-3">
            <h3>Sitemap Talento</h3>
            <ul>
                <li> <a href="/">Talento</a> </li>
                <li> <a href="/">#LifeVASS</a> </li>
                <li> <a href="/">Beneficios</a> </li>
                <li> <a href="/">Planes para ti</a> </li>
                <li> <a href="/">Proyectos</a> </li>
                <li> <a href="/">Smartworking</a> </li>
                <li> <a href="/">Ofertas</a> </li>
            </ul>
        </div>
        <div className="pre-footer-container pre-footer-company col-6 col-md-4">
            <h3>Empresas</h3>
            <ul>
                <li> <a href="/">VASS</a> </li>
                <li> <a href="/">Nateevo</a> </li>
                <li> <a href="/">Serbatic</a> </li>
                <li> <a href="/">vdSHOP</a> </li>
            </ul>
        </div>
    </div>
  );
}

export default PreFooter;