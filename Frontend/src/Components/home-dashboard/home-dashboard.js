import React from 'react';
import './home-dashboard.module.css';
import {Col, Container, Row} from "react-bootstrap";

const HomeDashboard = () => {
    return (
        <div className="home-dashboard">
            <Container className="d-flex flex-column justify-content-center align-items-center min-vh-100">
                <Row className="mb-5">
                    <Col className="text-center" md={{ span: 8, offset: 2 }}>
                        <h1 className="mb-4 mt-5" style={{ fontFamily: 'Arial, sans-serif' }}>Welcome to unibz Bot - Quickly answer your doubts</h1>
                        <p className="lead mb-4">
                            unibzBot is a thesis project developed by Simon Plancher to help first year engineering
                            students to quickly adapt to the new academic environment. First year students often might
                            have some questions regarding the procedures or services offered in the university. unibzBot
                            is there to help you with your university-related concerns.
                        </p>
                        <h4 className="mb-4 mt-3" style={{ fontFamily: 'Arial, sans-serif'}}> What queries does unibzBot answer?</h4>
                        <p className="lead mb-4">
                            unibzBot is primarily designed to answer questions about the procedures in the engineering faculty.
                            For other faculties the chatbot may not answer or give potentially wrong information. The Bot was developed
                            using Botpress Studio. It was trained using the website <a href="https://guide.unibz.it" style={{textDecoration: 'none'}}>guide.unibz.it</a>
                            &nbsp; and a couple of selected PDF documents.
                        </p>
                        <p className="lead mb-4">
                            unibzBot was trained to answer questions from the following topics:
                            <ul style={{ display: 'inline-block' ,listStyle: 'disc', textAlign: 'left', marginTop: 10}}>
                                <li>Accommodation</li>
                                <li>Administrative Services</li>
                                <li>Student Card</li>
                                <li>Canteens</li>
                                <li>Freshers Days</li>
                                <li>Psychological Service</li>
                                <li>Equal Opportunities</li>
                                <li>Insurance</li>
                                <li>Medical Assistance</li>
                                <li>International degree seeking students</li>
                                <li>pagoPA Payments</li>
                                <li>Public Transportation</li>
                                <li>Student Associations</li>
                                <li>Student Discounts</li>
                                <li>Student Representatives</li>
                                <li>Studying without Barriers</li>
                                <li>Alias Career</li>
                                <li>Tuition Fees</li>
                                <li>Language Requirements</li>
                                <li>Exchange Programmes</li>
                                <li>Internship procedures</li>
                                <li>Graduation</li>
                            </ul>
                        </p>
                        <h4 className="mb-4 mt-3" style={{ fontFamily: 'Arial, sans-serif'}}> What languages does unibzBot speak?</h4>
                        <p className="lead mb-4">
                            unibzBot was developed in English, but it can also handle most other languages. While for Italian
                            and German specific content was provided in the knowledge base, other languages rely on the translation
                            to the requested language. The most accurate responses will be obtained when chatting in
                            English, German or Italian, because there are less translation errors.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>

    );
};

export default HomeDashboard;
