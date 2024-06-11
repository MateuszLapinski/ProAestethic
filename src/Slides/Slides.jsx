import {Button, Carousel, Col, InputGroup, Row} from "react-bootstrap";
import Cards from "../Cards";
import React, {useEffect, useState} from "react";
import Form from 'react-bootstrap/Form';



export function ProjectType({onSelect}) {
    const [selectedTitle, setSelectedTitle] = useState(null);

    const handleSelectImage = (title) => {
        setSelectedTitle(title);
        if (onSelect) {
            onSelect(title);
        }
    };

    return (
        <>
            <h3 className="firstStepHeader">Wybierz rodzaj projektu</h3>
            <Row>
                <Col className="leftSide">
                    <Cards
                        srcImage="/Image/LewaRękaJasna.png"
                        title="Proteza"
                        onClick={() => handleSelectImage('Proteza')}
                        isSelected={selectedTitle === 'Proteza'}
                    />
                </Col>
                <Col className="rightSide">
                    <Cards
                        srcImage="/Image/thirdfinger.jpg"
                        title="Biżuteria"
                        onClick={() => handleSelectImage('Biżuteria')}
                        isSelected={selectedTitle === 'Biżuteria'}
                    />
                </Col>
            </Row>
        </>
    );
}

export function HandType({onSelect}) {
    const [selectedTitle, setSelectedTitle] = useState(null);

    const handleSelectImage = (title) => {
        setSelectedTitle(title);
        if (onSelect) {
            onSelect(title);
        }
    };
    return (
        <>
            <h3 className="firstStepHeader">wybierz rękę</h3>
            <Row>
                <Col className="leftSide">
                    <Cards
                        srcImage="/Image/LewaRękaJasna.png"
                        title="Lewa Ręka"
                        onClick={() => handleSelectImage('Lewa Ręka')}
                            />
                </Col>
                <Col className="rightSide">
                    <Cards
                            srcImage="/Image/LewaRękaJasna.png"
                            title="Prawa Ręka"
                            onClick={() => handleSelectImage('Prawa Ręka')}
                    />
                </Col>
            </Row>
        </>
    );
}

export function FingerType({ onSelect }) {
    const [selectedFinger, setSelectedFinger] = useState(null);

    const handleSelectTitle = (title) => {
        setSelectedFinger(title);
        if (onSelect) {
            onSelect(title);
        }
    };

    const images = [
        '/Image/secondfinger.jpg',
        '/Image/thirdfinger.jpg',
        '/Image/fourthfinger.jpg',
        '/Image/fivthfinger.jpg',
    ];
    const [currentImage, setCurrentImage] = useState(images[0]);

    const handleMouseMove2 = (e) => {
        const { clientX, currentTarget } = e;
        const { left, width } = currentTarget.getBoundingClientRect();
        const relativeX = clientX - left;

        const sectionWidth = width / 4;
        const shift = sectionWidth / 2;
        const adjustedRelativeX = relativeX - shift;

        const index = Math.floor(adjustedRelativeX / sectionWidth);
        const sectionIndex = Math.min(Math.max(index, 0), 3);

        setCurrentImage(images[sectionIndex]);
    };

    const handleClick = (e) => {
        const { clientX, currentTarget } = e;
        const { left, width } = currentTarget.getBoundingClientRect();
        const relativeX = clientX - left;

        const sectionWidth = width / 4;
        const shift = sectionWidth / 2;
        const adjustedRelativeX = relativeX - shift;

        const index = Math.floor(adjustedRelativeX / sectionWidth);
        const sectionIndex = Math.min(Math.max(index, 0), 3);

        const titles = ['2', '3', '4', '5'];
        const selectedTitle = titles[sectionIndex];

        console.log(`Tytuł: ${selectedTitle}`);
        handleSelectTitle(selectedTitle);
    };

    return (
        <>
            <h3 className="firstStepHeader">wybierz palec</h3>
            <Row className="centralSide">
                <Cards kindOfType={"fingersCard"} srcImage={currentImage} title="Wybrany Palec" onMouseMove={handleMouseMove2} onClick={handleClick}/>
            </Row>

        </>
    );
}

export function PhalanxType() {

    const images = [
        '/Image/paliczki.jpg',
        '/Image/paliczekbliższy.jpg',
        '/Image/paliczekśrodkowy.jpg',
        '/Image/paliczekdalszy.jpg',
    ];
    const [currentImage, setCurrentImage] = useState(images[0]);


    const handleMouseMove = (e) => {
        const {clientX, currentTarget} = e;
        const {left, width} = currentTarget.getBoundingClientRect();
        const relativeX = clientX - left;
        const sectionWidth = width / 4;
        const index = Math.floor(relativeX / sectionWidth);
        setCurrentImage(images[Math.min(index, images.length - 1)]);
    };

    return (
        <>
            <h3 className="firstStepHeader">wybierz paliczek</h3>
            <Row className="centralSide">
                <Cards kindOfType={"phalanxCard"} srcImage={currentImage} title="Wybrany Paliczek" onMouseMove={handleMouseMove}/>
            </Row>
        </>
    );
}

export function Wymiary() {

        const [length, setLength] = useState(20);
        const [circuit, setCircuit] = useState(20);

        const handleIncrementLenght = () => {
           setLength(length + 1);
        };
        const handleDecrementLenght = () => {
            if (length > 0) {
                setLength(length - 1);
            }
        };

    const handleIncrementCircuit = () => {
        setCircuit(circuit + 1);
    };
    const handleDecrementCircuit = () => {
        if (circuit > 0) {
            setCircuit(circuit - 1);
        }
    };

        return (
            <>
                <h3 className="firstStepHeader">Opisz wymiary</h3>
                <Row className="centralSide">
                    <Col className="leftSideDimension centered-inputs">
                        <Form.Label htmlFor="inputLength">Długość (w mm)</Form.Label>
                        <InputGroup>
                            <Button className="leftButton" variant="outline-secondary" onClick={handleDecrementLenght}>-</Button>
                            <Form.Control
                                type="number"
                                id="inputLength"
                                value={length}
                                onChange={(e) => setLength(Number(e.target.value))}
                                min={0}
                                className="centered-input"
                            />
                            <Button className="rightButton" variant="outline-secondary" onClick={handleIncrementLenght}>+</Button>
                        </InputGroup>

                        <Form.Label htmlFor="inputCircuit">Obwód (w mm)</Form.Label>
                        <InputGroup>
                            <Button className="leftButton"  variant="outline-secondary" onClick={handleDecrementCircuit}>-</Button>
                            <Form.Control
                                type="number"
                                id="inputCircuit"
                                value={circuit}
                                onChange={(e) => setCircuit(Number(e.target.value))}
                                min={0}
                                className="centered-input"
                            />
                            <Button className="rightButton" variant="outline-secondary" onClick={handleIncrementCircuit}>+</Button>
                        </InputGroup>
                    </Col>

                    <Col xs={6} className="dimensionDescription">
                        <h5> zanim przejdziesz do pomiarów:</h5>
                        <ul>
                            <li><p>długość palca zmierz na analogicznym palcu drugiej ręki
                                rozpoczynając centrymetr poniżej miejsca amputacji</p></li>
                            <li><p>średnice palca zmierz centrymetr poniżej miejsca amputacji</p></li>
                        </ul>
                    </Col>
                    <Col xs={6}>

                    </Col>
                </Row>
            </>
        );
    }
export function EstethicType() {
    const images = [
        '/Image/organiczna.jpg',
        '/Image/ażurowa.jpg',
        '/Image/heksagonalna.jpg',
    ];
    const [currentImage, setCurrentImage] = useState(images[0]);
    var cardType="estethicCard"

    return (
        <>
            <Row>
                <h3 className="firstStepHeader">wybierz rodzaj Estetyki</h3>
            </Row>
            <Row className="centralSide">
                <Cards srcImage={images[0]} title="Organiczna" kindOfType={cardType} />
                <Cards srcImage={images[1]} title="Ażurowa" kindOfType={cardType}  />
                <Cards srcImage={images[2]} title="Heksagonalna" kindOfType={cardType}  />
            </Row>
        </>
    );
}
