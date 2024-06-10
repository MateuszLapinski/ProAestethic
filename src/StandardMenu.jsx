import {Button, Container, Form, Nav, Navbar, NavDropdown} from "react-bootstrap";

export default function StandardMenu() {
    return (
        <Nav
            className="mx-auto my-2 my-lg-0 normalMenu"
            style={{maxHeight: '400px'}}
            navbarScroll
        >
            <Nav.Link className="navLink" href="#">strona główna</Nav.Link>
            <Nav.Link className="navLink" href="/configurator">konfigurator</Nav.Link>
            <Nav.Link className="navLink" href="#">partnerzy</Nav.Link>
            <Nav.Link className="navLink" href="#">kontakt</Nav.Link>
        </Nav>
    );
}
