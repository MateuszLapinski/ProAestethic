import {Button, Carousel, Col, InputGroup, Row} from "react-bootstrap";
import Cards from "../Cards";
import React, {useEffect, useState} from "react";
import Form from 'react-bootstrap/Form';


export function ProjectType({ onSelect }) {
    const [selectedTitle, setSelectedTitle] = useState(null);

    const handleSelectImage = (title) => {
        setSelectedTitle(title);
        console.log(title);
    };

    const handleClick = () => {
        if (selectedTitle && onSelect) {
            onSelect(selectedTitle);
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
                        kindOfType="ProjectCard"
                    />
                </Col>
                <Col className="rightSide">
                    <Cards
                        srcImage="/Image/LewaRękaJasna.png"
                        title="Biżuteria"
                        onClick={() => handleSelectImage('Biżuteria')}
                        isSelected={selectedTitle === 'Biżuteria'}
                        kindOfType="ProjectCard"
                    />
                </Col>
            </Row>
            <Row>
                <div className="ButtonsContainer">
                    <Button className="AcceptButton" variant="primary" size="lg" onClick={handleClick} active>
                        Zaakceptuj
                    </Button>
                </div>
            </Row>
        </>
    );
}
export function HandType({ onSelect, onBack }) {
    const [selectedTitle, setSelectedTitle] = useState(null);

    const handleSelectImage = (title) => {
        setSelectedTitle(title);
    };

    const handleClick = () => {
        if (selectedTitle && onSelect) {
            onSelect(selectedTitle);
        }
    };

    return (
        <>
            <h3 className="firstStepHeader">Wybierz rękę</h3>
            <Row>
                <Col className="leftSide">
                    <Cards
                        srcImage="/Image/LewaRękaJasna.png"
                        title="Lewa Ręka"
                        onClick={() => handleSelectImage('Lewa Ręka')}
                        kindOfType="ProjectCard"
                        isSelected={selectedTitle === 'Lewa Ręka'}
                    />
                </Col>
                <Col className="rightSide">
                    <Cards
                        srcImage="/Image/LewaRękaJasna.png"
                        title="Prawa Ręka"
                        onClick={() => handleSelectImage('Prawa Ręka')}
                        kindOfType="ProjectCard"
                        isSelected={selectedTitle === 'Prawa Ręka'}
                    />
                </Col>
            </Row>
            <Row>
                <div className="ButtonsContainer">
                    <Button className="returnButton" variant="secondary" size="lg" onClick={onBack} active>
                        Cofnij
                    </Button>
                    <Button className="AcceptButton" variant="primary" size="lg" onClick={handleClick} active>
                        Zaakceptuj
                    </Button>{' '}
                </div>
            </Row>
        </>
    );
}

export function FingerType({ onSelect, onBack }) {
    const [selectedFinger, setSelectedFinger] = useState("wybierz palec");
    const [currentImage, setCurrentImage] = useState('/Image/secondfinger.jpg');
    const [isLocked, setIsLocked] = useState(false);

    const images = [
        '/Image/secondfinger.jpg',
        '/Image/thirdfinger.jpg',
        '/Image/fourthfinger.jpg',
        '/Image/fivthfinger.jpg',
    ];

    const handleSelectTitle = (title) => {
        setSelectedFinger(title);
    };

    const handleMouseMove2 = (e) => {
        if (isLocked) return;

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

        const finger = ['palec wskazujący', 'palec środkowy', 'palec serdeczny', 'palec mały'];
        const selectedTitle = finger[sectionIndex];

        handleSelectTitle(selectedTitle);
        setCurrentImage(images[sectionIndex]);
        setIsLocked(true);

    };

    const handleAcceptClick = () => {
        if (selectedFinger && onSelect) {
            onSelect(selectedFinger);
        }
        setIsLocked(false); // Odblokowuje po zaakceptowaniu wyboru
    };

    return (
        <>
            <h3 className="firstStepHeader">Wybierz palec</h3>
            <Row className="centralSide">
                <Cards
                    kindOfType={"fingersCard"}
                    srcImage={currentImage}
                    title={selectedFinger}
                    onMouseMove={handleMouseMove2}
                    onClick={handleClick}
                />
            </Row>
            <Row>
                <div className="ButtonsContainer">
                    <Button className="returnButton" variant="secondary" size="lg" onClick={onBack} active>
                        Cofnij
                    </Button>
                    <Button className="AcceptButton" variant="primary" size="lg" onClick={handleAcceptClick} active>
                        Zaakceptuj
                    </Button>{' '}
                </div>
            </Row>
        </>
    );
}


export function PhalanxType({onSelect, onBack}) {

    const [selectedPhalanx, setSelectedPhalanx] = useState(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [selectedNamePhalanx, setNamePhalanx]= useState("Wybrany Palec")

    const handleSelectTitle = (index) => {
        setSelectedPhalanx(index);
        if (onSelect) {
            onSelect(index);
        }
    };

    const images = [
        '/Image/paliczki.jpg',
        '/Image/paliczekdalszy.jpg',
        '/Image/paliczekśrodkowy.jpg',
        '/Image/paliczekbliższy.jpg'
    ];

    const [currentImage, setCurrentImage] = useState(images[0]);

    const handleMouseMove = (e) => {
        const {clientY, currentTarget} = e;
        const {top, height} = currentTarget.getBoundingClientRect();
        const relativeY = clientY - top;

        const firstSectionHeight = height * 0.1;  // First 10%
        const secondSectionHeight = height * 0.2; // Next 20%

        let index;

        if (relativeY <= firstSectionHeight) {
            index = 1; // First 10%
            setNamePhalanx("Paliczek Dalszy")
            console.log(selectedNamePhalanx)
        } else if (relativeY <= firstSectionHeight + secondSectionHeight) {
            index = 2; // Next 20%
            setNamePhalanx("Paliczek Środkowy")
            console.log(selectedNamePhalanx)
        } else {
            index = 3; // Remaining 70%
            setNamePhalanx("Paliczek Bliższy")
            console.log(selectedNamePhalanx)
        }

        setCurrentImage(images[index]);
        setHoveredIndex(index);
    };

    const handleClick = () => {
        if (hoveredIndex !== null) {
            handleSelectTitle(hoveredIndex);
        }
    };

    return (
        <>
            <h3 className="firstStepHeader">wybierz paliczek</h3>
            <Row className="centralSide">
                <Cards
                    kindOfType={"phalanxCard"}
                    srcImage={currentImage}
                    title={selectedNamePhalanx}
                    onMouseMove={handleMouseMove}
                />
            </Row>
            <Row>
                <div className="ButtonsContainer">
                    <Button className="returnButton" variant="secondary" size="lg" onClick={onBack} active>
                        Cofnij
                    </Button>
                    <Button className="AcceptButton" variant="primary" size="lg" onClick={handleClick} active>
                        Zaakceptuj
                    </Button>{' '}

                </div>
            </Row>
        </>
    );
}

export function Wymiary({ onAccept, onBack }) {

    const [length, setLength] = useState(20);
    const [circuit, setCircuit] = useState(20);

    const handleIncrementLength = () => {
        setLength(length + 1);
    };
    const handleDecrementLength = () => {
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

    const handleClick = () => {
        const acceptanceInfo = {
            accepted: true,
            length,
            circuit
        };
        onAccept(acceptanceInfo);
    };

    return (
        <>
            <h3 className="firstStepHeader">opisz wymiary</h3>
            <Row className="centralSide">
                <Col className="leftSideDimension centered-inputs">
                    <Form.Label htmlFor="inputLength">Długość (w mm)</Form.Label>
                    <InputGroup>
                        <Button className="leftButton" variant="outline-secondary"
                                onClick={handleDecrementLength}>-</Button>
                        <Form.Control
                            type="number"
                            id="inputLength"
                            value={length}
                            onChange={(e) => setLength(Number(e.target.value))}
                            min={0}
                            className="centered-input"
                        />
                        <Button className="rightButton" variant="outline-secondary"
                                onClick={handleIncrementLength}>+</Button>
                    </InputGroup>

                    <Form.Label htmlFor="inputCircuit">Obwód (w mm)</Form.Label>
                    <InputGroup>
                        <Button className="leftButton" variant="outline-secondary"
                                onClick={handleDecrementCircuit}>-</Button>
                        <Form.Control
                            type="number"
                            id="inputCircuit"
                            value={circuit}
                            onChange={(e) => setCircuit(Number(e.target.value))}
                            min={0}
                            className="centered-input"
                        />
                        <Button className="rightButton" variant="outline-secondary"
                                onClick={handleIncrementCircuit}>+</Button>
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
            </Row>
            <Row>
                <div className="ButtonsContainer">
                    <Button className="returnButton" variant="secondary" size="lg" onClick={onBack} active>
                        Cofnij
                    </Button>
                    <Button className="AcceptButton" variant="primary" size="lg" onClick={handleClick} active>
                        Zaakceptuj
                    </Button>{' '}

                </div>
            </Row>
        </>
    );
}

export function EstethicType({ onAccept, onBack }) {
    const [estethic, setEstethic] = useState(null);

    const images = [
        '/Image/organiczna.jpg',
        '/Image/ażurowa.jpg',
        '/Image/heksagonalna.jpg',
    ];

    const cardType = "estethicCard";

    const handleCardClick = (title) => {
        setEstethic(title);
    };

    const handleClick = () => {
        const acceptanceInfo = {
            accepted: true,
        };
        const choose = {
            estethic: estethic,
        };
        onAccept(acceptanceInfo);
        onAccept(choose);
    };

    return (
        <>
            <Row>
                <h3 className="firstStepHeader">wybierz rodzaj Estetyki</h3>
            </Row>
            <Row className="centralSide">
                <Cards srcImage={images[0]} title="Organiczna" kindOfType={cardType} onClick={() => handleCardClick('Organiczna')} />
                <Cards srcImage={images[1]} title="Ażurowa" kindOfType={cardType} onClick={() => handleCardClick('Ażurowa')} />
                <Cards srcImage={images[2]} title="Heksagonalna" kindOfType={cardType} onClick={() => handleCardClick('Heksagonalna')} />
            </Row>
            <Row>
                <div className="ButtonsContainer">
                    <Button className="returnButton" variant="secondary" size="lg" onClick={onBack} active>
                        Cofnij
                    </Button>
                    <Button className="AcceptButton" variant="primary" size="lg" onClick={handleClick} active>
                        Zaakceptuj
                    </Button>{' '}
                </div>
            </Row>
        </>
    );
}
export function Summary({ProjectType, HandType, FingerType, PhalanxType, Wymiary, EstethicType, onBack }) {


    const onClick = () => {

        const fileUrl ="/OBJ/B1.stl";

        const anchor = document.createElement('a');
        anchor.href = fileUrl;
        anchor.download = 'downloaded_file.pdf';

        document.body.appendChild(anchor);

        anchor.click();

        document.body.removeChild(anchor);
    };

    return (
        <>
            <Row>
                <h3 className="firstStepHeader">podsumowanie</h3>
            </Row>
            <Row className="centralSide">
                <p>Rodzaj Projektu: {ProjectType} </p>
                <p>Wybór Ręki: {HandType} </p>
                <p>Wybór palca: {FingerType} </p>
                <p>Wybór paliczka: {PhalanxType} </p>
                <p>Wymiary: {Wymiary} </p>
                <p>Wybór estetyki: {EstethicType} </p>

            </Row>
            <Row>
                <div className="ButtonsContainer">
                    <Button className="returnButton" variant="secondary" size="lg" onClick={onBack} active>
                        Cofnij
                    </Button>
                    <Button className="AcceptButton" variant="primary" size="lg" onClick={onClick} active>
                        Pobierz plik
                    </Button>{' '}
                </div>
            </Row>
        </>
    );
}
