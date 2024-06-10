import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faLaptop, faLock } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  const servicesData = [
    {
      icon: faShoppingCart,
      title: 'E-Commerce',
      description:
        'Elegir una plataforma de comercio electrónico puede parecer un reto, ya que hay muchas opciones entre las que elegir.',
    },
    {
      icon: faLaptop,
      title: 'Responsive Design',
      description:
        'Permite que los usuarios experimenten de primera mano cómo se adapta a diferentes dispositivos.',
    },
    {
      icon: faLock,
      title: 'Marketing Digital',
      description:
        'Muestra los resultados que has obtenido para clientes anteriores, destacando métricas como aumento de tráfico, leads o conversiones.',
    },
  ];

  return (
    <section className="page-sectiontext-white text-center text-lg-start bg-Link" id="services">
    <Container >
      <div className="text-center">
      <h2 className="section-heading text-uppercase">Servicios</h2>
        <h3 className="section-subheading text-muted">Soluciones tecnológicas.</h3>
      </div>


        <Row>
          {servicesData.map((service) => (
            <Col key={service.title} md={4} className="text-center">
              <span className="fa-stack fa-4x">
              <i className="bi bi-clock icon-feature text-gradient d-block mb-3"></i>
                <FontAwesomeIcon icon={service.icon} className="fa-stack-1x fa-inverse" />
              </span>
              <h2 className="masthead-heading text-uppercase">{service.title}</h2>
              <p className="text-muted">{service.description}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export { Services };
