import {Carousel, Col, Row} from "react-bootstrap";
import Cards from "../Cards";
import React, {useEffect, useState} from "react";




export function ProjectType() {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleSelectImage = (image) => {
        setSelectedImage(image);
    };
    console.log(selectedImage)
    return (
        <>

            <Row>
                <Col className="leftSide">
                    <Cards
                        srcImage="/Image/LewaRękaJasna.png"
                        title="Proteza"
                        onClick={() => handleSelectImage('/Image/LewaRękaJasna.png')}
                        isSelected={selectedImage === '/Image/LewaRękaJasna.png'}
                    />
                </Col>
                <Col className="rightSide">
                    <Cards
                        srcImage="/Image/thirdfinger.jpg"
                        title="Biżuteria"
                        onClick={() => handleSelectImage('/Image/thirdfinger.jpg')}
                        isSelected={selectedImage === '/Image/thirdfinger.jpg'}/>
                </Col>
            </Row>

        </>
    );
}
export function HandType(){
    return (
        <>
            <Row>
                <Col className="leftSide">
                    <Cards srcImage="/Image/LewaRękaJasna.png" title="Lewy Palec" />
                </Col>
                <Col className="rightSide">
                    <Cards srcImage="/Image/LewaRękaJasna.png" title="Prawy Palec" />
                </Col>
            </Row>
        </>
    );
}
export function FingerType(){
    const images = [
        '/Image/secondfinger.jpg',
        '/Image/thirdfinger.jpg',
        '/Image/fourthfinger.jpg',
        '/Image/fivthfinger.jpg',
    ];
    const [currentImage, setCurrentImage] = useState(images[0]);


    const handleMouseMove = (e) => {
        const { clientX, currentTarget } = e;
        const { left, width } = currentTarget.getBoundingClientRect();
        const relativeX = clientX - left;
        const sectionWidth = width / 4;
        const index = Math.floor(relativeX / sectionWidth);
        setCurrentImage(images[Math.min(index, images.length - 1)]);
    };

    return (
        <>
            <Row className="centralSide">
                <Cards srcImage={currentImage} title="Current Finger" onMouseMove={handleMouseMove} />
            </Row>
        </>
    );
}

export function PhalanxType(){
    const images = [
        '/Image/secondfinger.jpg',
        '/Image/thirdfinger.jpg',
        '/Image/fourthfinger.jpg',
        '/Image/fivthfinger.jpg',
    ];
    const [currentImage, setCurrentImage] = useState(images[0]);


    const handleMouseMove = (e) => {
        const { clientX, currentTarget } = e;
        const { left, width } = currentTarget.getBoundingClientRect();
        const relativeX = clientX - left;
        const sectionWidth = width / 4;
        const index = Math.floor(relativeX / sectionWidth);
        setCurrentImage(images[Math.min(index, images.length - 1)]);
    };



    return (
        <>
            <Row className="centralSide">
                <Cards srcImage={currentImage} title="Current Finger" onMouseMove={handleMouseMove} />
            </Row>
        </>
    );
}
