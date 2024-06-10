import React from "react";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { Portfolio } from "./Portafolio";
import { Services } from "./Servicios";
import { Features } from "./Features";

const SplashScreen = () => {
  return (
    <div className="App">
      <Header />
      <section className="hero">
        <header className="masthead">
          <div className="container">
            <h2 className="masthead-heading text-uppercase">ISO Solutions</h2>
            <div className="masthead-subheading  text-uppercase">
              Tecnología y Calidad!
            </div>
            <p className="text-muted">
              "Impulsamos la transformación digital de tu sistema ISO para
              optimizar la eficiencia y catapultar el crecimiento de tu empresa.
              Descárgala ahora!"
            </p>
            <div className="d-flex align-items-center">
              <a className="me-lg-3 mb-4 mb-lg-0" href="#!">
                <img
                  className="app-badge"
                  src="/img/google-play-badge.svg"
                  alt="..."
                />
              </a>
              <a className="me-lg-3 mb-4 mb-lg-0" href="#!">
                <img
                  className="app-badge"
                  src="/img/app-store-badge.svg"
                  alt="..."
                />
              </a>
            </div>
            <a
              className="slideButton btn btn-warning btn-xl mx-2"
              href="#services"
            >
              Solicitar Asesoría Gratuita
            </a>
          </div>
        </header>
      </section>
      <Features />
      <Services />
      <Portfolio />
      
      <Footer />
    </div>
  );
};

export default SplashScreen;
