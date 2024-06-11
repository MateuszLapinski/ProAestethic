import {Col, Row, Carousel} from "react-bootstrap";
import React,{useEffect, useState} from "react";
import {EstethicType, FingerType, HandType, PhalanxType, ProjectType, Wymiary} from "./Slides/Slides";

function CarouselComponent() {
    const [currentStep, setCurrentStep] = useState('ProjectType');

    const handleProjectTypeSelect = (title) => {
        console.log('Title selected:', title);
        if (title === 'Proteza') {
            setCurrentStep('HandType');
        } else if (title === 'Biżuteria') {
            setCurrentStep('EstethicType');
        } else if (title==='Lewa Ręka' || title === 'Prawa Ręka'){
            setCurrentStep("FingerType")
        }else if (title==='2' || title==='3' || title==='4' || title==='5'){
            setCurrentStep("PhalanxType")
        }
    };
    return (
        <>
            <Row>
                {currentStep === 'ProjectType' && <ProjectType onSelect={handleProjectTypeSelect} />}
                {currentStep === 'HandType' && <HandType onSelect={handleProjectTypeSelect} />}
                {currentStep === 'FingerType' && <FingerType onSelect={handleProjectTypeSelect}/>}
                {currentStep === 'PhalanxType' && <PhalanxType />}
                {/*{currentStep === 'Wymiary' && <Wymiary />}
                {currentStep === 'EstethicType' && <EstethicType />}>*/}
                <Wymiary />
                <EstethicType />

            </Row>

        </>
    );
}

export default CarouselComponent;