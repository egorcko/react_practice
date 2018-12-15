import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

const MainHeader = styled.h1`
    color: #fff;
    font-size: 24px;
    font-weight: 700;
    strong {
        font-size: 40px;
        display: block;
    }
`
const MainText = styled.p`
    color: #fff;
    font-size: 18px;
    font-weight: 300;
    line-height: 1.7;
    margin-top: 50px;
`
const MainButton = styled.button`
    margin-top: 30px;
    color: #fff;
    background-color: #ffa14b;
    border: none;
    border-radius: 30px;
    font-size: 20px;
    padding: 18px 38px;
`
const Slider = styled.div`
    width: 555px;
    height: 375px;
    margin-top: 25px;
    background: rgba(255, 255, 255, .3);
`

class Main extends Component {
    render() {
        return (
            <Row>
                <Col lg={5}>
                    <MainHeader> <strong>Качественный ремонт</strong> iphone за 35 минут и гарантия 1 год</MainHeader>
                    <MainText>Оставьте заявку на бесплатную диагностику без очереди, и получите защитное стекло, стоимостью 1000 рублей, с установкой в подарок!</MainText>
                    <MainButton>Отправить заявку!</MainButton>
                </Col>
                <Col lg={6} lgOffset={1}>
                    <Slider/>
                </Col>
            </Row>
        );
    }
}

export default Main;