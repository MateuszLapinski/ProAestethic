import {Col, Row, Carousel} from "react-bootstrap";
import Cards from "./Cards";
import React from "react";
import {FingerType, HandType, ProjectType} from "./Slides/Slides";

function CarouselComponent() {
    return (
        <>
            <Row>
                <h3 className="firstStepHeader">wybierz rodzaj projektu</h3>
            </Row>
            <Row>
                <Carousel fade>
                    <Carousel.Item>
                        <ProjectType/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <HandType/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <FingerType/>
                    </Carousel.Item>
                </Carousel>
            </Row>

        </>
    );
}

export default CarouselComponent;