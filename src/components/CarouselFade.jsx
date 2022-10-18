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
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={people}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={networks}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

