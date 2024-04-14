import React from 'react';
import Chatbot from "./chatbot/chatbot";
import './dashboard.css';
import {Col, Container, Row} from "react-bootstrap";

const Dashboard = () => {
    return (
        <div className="Dashboard">
            <Container className="d-flex flex-column justify-content-center align-items-center">
                <Row className="mb-3">
                    <Col>
                        <h1>Try out unibzBot here</h1>
                        <p>
                            unibzBot will try to answer every University related question.
                            <br/>
                            It is not able to answer questions that are not UNIBZ related.
                        </p>
                    </Col>
                </Row>
                <Chatbot/>
            </Container>
        </div>
    );
};

export default Dashboard;
