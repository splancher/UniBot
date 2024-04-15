import React from 'react';
import './home-dashboard.module.css';
import {Col, Container, Row} from "react-bootstrap";

const HomeDashboard = () => {
    return (
        <div className="home-dashboard">
            <Container className="d-flex flex-column justify-content-center align-items-center min-vh-100">
                <Row className="mb-5">
                    <Col className="text-center" md={{ span: 8, offset: 2 }}>
                        <h1 className="mb-4 mt-5" style={{ fontFamily: 'Arial, sans-serif' }}>Welcome to unibz Bot - Simplifying Your Journey</h1>
                        <p className="lead mb-4">
                            Embark on your academic adventure with unibz Bot, an innovative thesis project meticulously crafted to assist first-year engineering students at our esteemed university. Powered by Botpress, this cutting-edge tool is your reliable companion, offering swift and accurate responses to your inquiries.
                        </p>
                        <p className="lead mb-4">
                            Leveraging the wealth of knowledge contained within the university's comprehensive study guide, unibz Bot stands ready to provide invaluable support across a myriad of academic topics. Whether you seek guidance on course schedules, exam logistics, or other pertinent matters, unibz Bot is your go-to resource.
                        </p>
                        <p className="lead mb-4">
                            Developed by a dedicated team of passionate students, unibz Bot is tailor-made to cater to the unique needs of our university community. While its expertise lies in addressing UNIBZ-related queries, please be aware that it may not be equipped to handle inquiries unrelated to university affairs.
                        </p>
                        <p className="lead mb-4">
                            Join us on this transformative journey with unibz Bot and experience firsthand the unparalleled convenience and efficiency it brings to your academic endeavors. Say goodbye to confusion and frustration – with unibz Bot, navigating your academic path has never been easier.
                        </p>
                        <p className="lead mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac tortor nec sapien venenatis aliquam. Morbi ullamcorper, dui nec mattis ultricies, lacus nisl fermentum justo, vitae cursus libero risus ac ante. Nulla facilisi. Sed faucibus sed urna sit amet posuere. Aliquam pretium fringilla nisi, at dignissim orci condimentum a. Nulla facilisi.
                        </p>
                        <p className="lead mb-4">
                            Nulla facilisi. Duis hendrerit, nisl eget varius pellentesque, quam nisi vulputate risus, sed dignissim risus ligula nec orci. Praesent hendrerit, sem vitae eleifend condimentum, justo ipsum luctus leo, at hendrerit lorem nunc eget risus. Nulla facilisi. Duis id sem ac purus rutrum volutpat in in nisl.
                        </p>
                        <p className="lead mb-4">
                            Proin ac lacus quis mi fringilla fringilla ut nec dui. In nec varius quam, sit amet laoreet libero. Aliquam auctor fringilla felis, nec efficitur velit bibendum nec. Integer auctor sem a magna malesuada, non dapibus nunc fermentum. Aenean sit amet urna justo. Nullam fermentum viverra mauris, eu bibendum justo malesuada a. Nam eget tortor at urna consectetur ultricies nec nec lorem.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>

    );
};

export default HomeDashboard;
