import Carousel from 'react-bootstrap/Carousel';
import monitoring from "../assets/images/monitoring.jpg"
import people from "../assets/images/people.jpg"
import networks from "../assets/images/networks.jpg"
import { Container } from './styles/styleCarouselFade'


export function CarouselFade() {
  return (
    <Container>
      <Carousel fade className="m-3 " >
        <Carousel.Item>
          <img
            className="d-block  w-100"
            src={monitoring}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Métricas e monitoramento</h3>
            <p>Agora tenha em suas mãos as métricas e monitoramento de equipes e ambientes!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={people}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Equipe qualificada e reforçada</h3>
            <p>Quadro da empresa sobe contando com equipe qualificada e pronta para ajudar na expansão dos nossos serviços de infra e suporte!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={networks}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Nova infraestrutura de rede</h3>
            <p>
              Agora com maior organização, tecnologia de ponta e maior conexão!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

