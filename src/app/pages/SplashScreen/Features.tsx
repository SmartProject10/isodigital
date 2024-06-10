import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faHeadset, faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons'; 

const Features = () => {
  return (
    <section id="features">
      <Container className="px-5">
        <Row gx={5} alignItems="center">
          <Col lg={8} order={{ lg: 1 }}>
            <Container fluid >
              <Row gx={5}>
                <Col md={6} mb={5}>
                  {/* Feature item */}
                  <div className="text-center">
                    <FontAwesomeIcon
                      icon={faClock}
                      className="icon-feature text-gradient d-block mb-3"
                    />
                    <h3 className="font-alt">Mejora la Calidad</h3>
                    <p className="text-muted mb-0">
                    Ayuda a identificar y eliminar las causas de errores y no conformidades, lo que se traduce en productos y servicios de mayor calidad.
                    </p>
                  </div>
                </Col>
                <Col md={6} mb={5}>
                  {/* Feature item */}
                  <div className="text-center">
                    <FontAwesomeIcon 
                      icon={faHeadset}
                      className="icon-feature text-gradient d-block mb-3"
                    />
                    <h3 className="font-alt">Soporte Personalizado</h3>
                    <p className="text-muted mb-0">
                    ¡Experimenta soporte ultrarrápido las 24 horas, los 7 días de la semana! ¡Únase a nuestro grupo exclusivo de Telegram para obtener respuestas ultrarrápidas!
                    </p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={6} mb={5}>
                  {/* Feature item */}
                  <div className="text-center">
                    <FontAwesomeIcon
                      icon={faMoneyBillAlt}
                      className="icon-feature text-gradient d-block mb-3"
                    />
                    <h3 className="font-alt">Mejor flujo de información</h3>
                    <p className="text-muted mb-0">
                    La implementación de un sistema de gestión ISO promueve el flujo de información transparente y eficiente entre los diferentes departamentos y niveles de la organización.
                    </p>
                  </div>
                </Col>
                <Col md={6}>
                  {/* Feature item */}
                  <div className="text-center">
                    <FontAwesomeIcon
                      icon={faLock}
                      className="icon-feature text-gradient d-block mb-3"
                    />
                    <h3 className="font-alt">Acceso a nuevos mercados</h3>
                    <p className="text-muted mb-0">
                    La certificación ISO puede abrir las puertas a nuevos mercados y oportunidades de negociol!
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export { Features };

