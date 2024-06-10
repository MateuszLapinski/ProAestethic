import {Card} from "react-bootstrap";
import PropTypes from "prop-types";

export default function Cards({srcImage, title, onMouseMove,  onClick, isSelected}) {
    return (

        <Card className={`card ${isSelected ? 'selected' : ''}`} onMouseMove={onMouseMove} onClick={onClick}>
            <Card.Img variant="top" src={srcImage}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
            </Card.Body>
        </Card>
    );

}
Cards.propTypes = {
    srcImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onMouseMove: PropTypes.func,
};