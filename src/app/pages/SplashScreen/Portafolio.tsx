import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: 'ISO 45001',
      subtitle: 'Sistemas de Gestión Seguridad e Higiene',
      image: '/img/1.jpg',
      link: '#portfolioModal2',
    },
    {
        id: 1,
        title: 'ISO 9001',
        subtitle: 'Sistemas de Gestión de Documentos',
        image: '/img/2.jpg',
        link: '#portfolioModal2',
      },
      {
        id: 1,
        title: 'ISO 14001',
        subtitle: 'Sistemas de Gestión de RRHH',
        image: '/img/3.jpg',
        link: '#portfolioModal2',
      },
  
 
 
  
  ];

  return (
    <section className="page-section bg-light" id="portfolio">
      <Container>
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Sistemas de Gestión</h2>
          <h3 className="section-subheading text-muted">Soluciones ISO.</h3>
        </div>
        <Row>
          {portfolioItems.map((item) => (
            <Col key={item.id} lg={4} sm={6} mb={4}>
              <Card className="portfolio-item">
                <a
                  className="portfolio-link"
                  href={item.link || '#'} // Handle links and modals
                  data-bs-toggle={item.link ? 'modal' : ''} // Add data-bs-toggle for modal links
                >
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <Image className="img-fluid" src={item.image} alt={item.title} />
                </a>
                <Card.Body className="portfolio-caption">
                  <Card.Title className="portfolio-caption-heading">
                    {item.title}
                  </Card.Title>
                  <Card.Text className="portfolio-caption-subheading text-muted">
                    {item.subtitle}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
export { Portfolio };

