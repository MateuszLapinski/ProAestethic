import MobileMenu from "./MobileMenu";
import StandardMenu from "./StandardMenu";
import {Container, Navbar, Image} from "react-bootstrap";
import {Link} from "react-router-dom";
import React from "react";

export default function TopMenu() {
    return(
        <>
            <Navbar expand="lg" className="bg-body-tertiary navContainer">
                <Container fluid>
                    <Link to='/' className="d-block">
                        <Image src="/Image/ProAestethicLogo.png" className="mobileLogo"></Image>
                    </Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <StandardMenu/>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
