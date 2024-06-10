import Button from 'react-bootstrap/Button';

const Footer = () => (
  <footer className="text-white text-center text-lg-start bg-dark">
    <div className="container p-4">
      <div className="row mt-4">
        <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
          <div className="col-md-6 mb-md-0 mb-3">
                <p className="text-uppercase">Nosotros</p>
                <ul className="list-unstyled">
                    <li><a href="#!">Equipo</a></li>
                    <li><a href="#!">Soporte</a></li>
                    <li><a href="#!">Planes</a></li>
                    <li><a href="#!">Blog</a></li>
                </ul>
            </div>

            <div className="col-md-6 mb-md-0 mb-3">
                <p className="text-uppercase">ISO</p>
                <ul className="list-unstyled">
                    <li><a href="#!">ISO 45001</a></li>
                    <li><a href="#!">ISO 9001</a></li>
                    <li><a href="#!">ISO 14001</a></li>
                    <li><a href="#!">ISO 9001</a></li>
                </ul>
            </div>

          <div className="mt-4">
            <a type="button" className="btn btn-floating btn-light btn-lg">
              <i className="fab fa-facebook-f"></i>
            </a>

            <a type="button" className="btn btn-floating btn-light btn-lg">
              <i className="fab fa-dribbble"></i>
            </a>

            <a type="button" className="btn btn-floating btn-light btn-lg">
              <i className="fab fa-twitter"></i>
            </a>

            <a type="button" className="btn btn-floating btn-light btn-lg">
              <i className="fab fa-google-plus-g"></i>
            </a>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
          
          <div className="form-outline form-white mb-4">
          <p>
          Suscríbase a nuestro boletín y manténgase actualizado sobre las últimas noticias y
            ofertas..
          </p>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email address"
              required
            />
             <a className="btn btn-danger btn-xl text-uppercase text-black" href="/api/subscribe">Subscribe</a>
        
          </form>
          </div>

          <ul className="fa-ul" >
            <li className="mb-3">
              <span className="fa-li">
                <i className="fas fa-home"></i>
              </span>
              <span className="ms-2">Miami, 00-967, Orlando</span>
            </li>
            <li className="mb-3">
              <span className="fa-li">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="ms-2">info@isodigitalsolution.com</span>
            </li>
            <li className="mb-3">
              <span className="fa-li">
                <i className="fas fa-phone"></i>
              </span>
              <span className="ms-2">+ 1 234 567 88</span>
            </li>
          </ul>
        </div>

        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
          <p className="text-uppercase mb-4">Horarios de apertura</p>

          <table className="table text-center text-white">
            <tbody className="fw-normal">
              <tr>
                <td>Mon - Thu:</td>
                <td>8am - 9pm</td>
              </tr>
              <tr>
                <td>Fri - Sat:</td>
                <td>8am - 1am</td>
              </tr>
              <tr>
                <td>Sunday:</td>
                <td>9am - 10pm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div className="text-center p-3" >
      © 2024 Copyright:
      <a className="text-white" href="https://isodigitalsolution.com/">
      isodigitalsolution.com
      </a>
    </div>
  </footer>
);

export { Footer };
