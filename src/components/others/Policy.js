import React, {Component, Fragment} from 'react';
import {Container, Row, Col, Card, Breadcrumb} from 'react-bootstrap'
import {Link} from 'react-router-dom';

class Policy extends React.Component{
    render(){
        return (
            <Fragment>
                 <Container className="TopSection">
                    <Row>
                        <Breadcrumb className=" shadow-sm w-100 bg-white mt-3">
                          <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                          <Breadcrumb.Item><Link to="/policy">Policy</Link></Breadcrumb.Item>
                        </Breadcrumb>
                    </Row>
                    <Row>
                        <Col className="mt-2" md={12} lg={12} sm={12} xs={12}>
                            <Card>
                                <Card.Body>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation </p>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation </p>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation </p>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation </p>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation </p>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation </p>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation </p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                     <div class="ph-item">
                        <div class="ph-col-12">
                            <div class="ph-row">
                                <div class="ph-col-12"></div>
                                <div class="ph-col-12"></div>
                                <div class="ph-col-12"></div>
                                <div class="ph-col-12"></div>
                                <div class="ph-col-12"></div>
                                <div class="ph-col-12"></div>
                                <div class="ph-col-12"></div>
                                <div class="ph-col-12"></div>
                                <div class="ph-col-12"></div>
                                <div class="ph-col-12"></div>
                                <div class="ph-col-12"></div>
                                <div class="ph-col-12"></div>
                                <div class="ph-col-12"></div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Fragment>
        )
    }
}
export default Policy;