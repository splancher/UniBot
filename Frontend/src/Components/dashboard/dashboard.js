import React from 'react';
import Chatbot from "./chatbot/chatbot";
import './dashboard.css';
import { ReactComponent as ArrowSvg } from './arrow-curved.svg';
import {Col, Container, Row} from "react-bootstrap";

const Dashboard = () => {
    return (
        <div className="Dashboard">
            <Container className="d-flex flex-column justify-content-center align-items-center min-vh-100">
                <Row className="mb-3">
                    <Col>
                        <h1>Try out unibzBot here</h1>
                        <p>
                            unibzBot will try to answer every University related question.
                            It is not able to answer questions that are not UNIBZ related.
                        </p>
                    </Col>
                </Row>
                <Row className="align-items-center">
                    <Col>
                        <Chatbot />
                    </Col>
                    <Col xs="auto">
                        <ArrowSvg className="arrow" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Dashboard;
