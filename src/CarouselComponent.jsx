import {Col, Row, Carousel} from "react-bootstrap";
import React,{useEffect, useState} from "react";
import {EstethicType, FingerType, HandType, PhalanxType, ProjectType, Summary, Wymiary} from "./Slides/Slides";

export default function CarouselComponent() {
    const [currentStep, setCurrentStep] = useState('ProjectType');
    const [dimensions, setDimensions] = useState(null);
    const [selectedProjectType, setSelectedProjectType] = useState(null);
    const [selectedHandType, setSelectedHandType] = useState(null);
    const [selectedFinger, setSelectedFingerType] = useState(null);
    const [selectedPhalanx, setSelectedPhalanxType] = useState(null);
    const [selectedEstethic, setSelectedEstethicType] = useState(null);

    const handleProjectTypeSelect = (title) => {
        setSelectedProjectType(title);
        if (title === 'Proteza') {
            setCurrentStep('HandType');
        } else if (title === 'Biżuteria') {
            setCurrentStep('EstethicType');
        }
    };

    const handleHandTypeSelect = (title) => {
        setSelectedHandType(title);
        setCurrentStep('FingerType');
    };

    const handleFingerTypeSelect = (title) => {
        setSelectedFingerType(title);
        setCurrentStep('PhalanxType');
    };

    const handlePhalanxTypeSelect = (title) => {
        setSelectedPhalanxType(title);
        setCurrentStep('Wymiary');
    };

    const handleDimensionsAccept = (info) => {
        setDimensions(info);
        setCurrentStep('EstethicType');
    };

    const handleEstethicTypeAccept = (choose) => {
        setSelectedEstethicType(choose.estethic);
        setCurrentStep('Summary');
    };

    const handleBack = () => {
        if (currentStep === 'HandType') {
            setCurrentStep('ProjectType');
        } else if (currentStep === 'FingerType') {
            setCurrentStep('HandType');
        } else if (currentStep === 'PhalanxType') {
            setCurrentStep('FingerType');
        } else if (currentStep === 'Wymiary') {
            setCurrentStep('PhalanxType');
        } else if (currentStep === 'EstethicType') {
            setCurrentStep('Wymiary');
        } else if (currentStep === 'Summary') {
            setCurrentStep('EstethicType');
        }
    };

    return (
        <>
            <Row>
                {currentStep === 'ProjectType' && <ProjectType onSelect={handleProjectTypeSelect} onBack={handleBack} />}
                {currentStep === 'HandType' && <HandType onSelect={handleHandTypeSelect} onBack={handleBack} />}
                {currentStep === 'FingerType' && <FingerType onSelect={handleFingerTypeSelect} onBack={handleBack} />}
                {currentStep === 'PhalanxType' && <PhalanxType onSelect={handlePhalanxTypeSelect} onBack={handleBack} />}
                {currentStep === 'Wymiary' && <Wymiary onAccept={handleDimensionsAccept} onBack={handleBack} />}
                {currentStep === 'EstethicType' && <EstethicType onAccept={handleEstethicTypeAccept} onBack={handleBack} />}
                {currentStep === 'Summary' && <Summary
                    ProjectType={selectedProjectType}
                    HandType={selectedHandType}
                    FingerType={selectedFinger}
                    PhalanxType={selectedPhalanx}
                    EstethicType={selectedEstethic}
                    onBack={handleBack} />}
            </Row>
        </>
    );
}
