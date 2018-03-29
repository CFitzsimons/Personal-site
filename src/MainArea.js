import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import Evan from './Evan';

class MainArea extends Component{
    constructor() {
        super();

    }
    render(){
        return(
            <Container fluid>
            <Row>
                <Col>
               <Evan/>
                </Col>
                </Row>
                </Container>
        );
    }
}
export default MainArea;