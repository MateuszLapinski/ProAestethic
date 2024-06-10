import React from "react";
import { Row, Col, Image } from 'react-bootstrap';
import {Link, Outlet} from "react-router-dom";
import TopMenu from "./TopMenu";
import './CSS/App.css';
import './CSS/Layout.css';
export function Layout() {
    return (
        <div className="app">
            <Row className="topBar">
                <Col className="logoImageContainer col-3">
                    <Link to='/' className="d-block">
                        <Image src="/Image/ProAestethicLogo.png" className="logo"></Image>
                    </Link>
                </Col>
                <Col>
                    <TopMenu/>
                </Col>

            </Row>
            <Row className="mainContent">
                <Outlet/>
            </Row>
        </div>
    )
}