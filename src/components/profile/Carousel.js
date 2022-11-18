import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import triviaProject1 from '../../images/projects/trivia-project-1.png';
import shopCartProject1 from '../../images/projects/shop-cart-project.png';

export default function CarouselComponent() {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="images-projects"
                        src={triviaProject1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="images-projects"
                        src={shopCartProject1}
                        alt="Secound slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}