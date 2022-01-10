import Ladders from "../commons/images/ladders.jpg"

function TextBanner() {
  return (
    <div className="text-banner d-flex flex-column flex-lg-row justify-content-end align-items-lg-center justify-content-lg-start w-100">
        <div className="container-title mx-3 my-2">
            <h2 className="text-uppercase">empecemos a <br/> hacerlo sencillo</h2>
        </div>
        <div className="container-subtitle mx-3 my-2 mt-lg-2 align-self-start">
            <h6 className="px-3">Nos emociona impulsar tu <br/> transformacion digital </h6>
        </div>
    </div>
  );
}

export default TextBanner;