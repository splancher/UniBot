import React from 'react';
import Chatbot from "./chatbot/chatbot";
import './dashboard.css';
import WidgetPointer from '../../Images/widget.png';
import {Col, Container, Row} from "react-bootstrap";

const Dashboard = () => {
    return (
        <div className="Dashboard">
            <Container className="d-flex flex-column justify-content-center align-items-center">
                <Row className="mb-3">
                    <Col>
                        <h1>Try out unibzBot here</h1>
                        <p>
                            unibzBot will try to answer every university related question.
                            <br/>
                            It is not able to answer questions that are not UNIBZ related.
                            <br/>
                            Click on the icon in the bottom right to try out unibzBot!

                        </p>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col className={"d-flex justify-content-center"}>

                        <img src={WidgetPointer} alt={"Widget Pointer"}/>
                    </Col>
                </Row>
                <Chatbot/>
            </Container>
        </div>
    );
};

export default Dashboard;
