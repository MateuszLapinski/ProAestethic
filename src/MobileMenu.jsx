import {Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function MobileMenu() {
    return(
        <Nav
            className="me-auto my-2 my-lg-0 mobileMenu"
            style={{ maxHeight: '300px' }}
            navbarScroll
        >

            <Nav.Link href="#action1">strona główna</Nav.Link>
            <Nav.Link href="#action2">konfigurator</Nav.Link>
            <Nav.Link href="#action2">partnerzy</Nav.Link>
            <Nav.Link href="#action2">kontakt</Nav.Link>
        </Nav>
    );
}
