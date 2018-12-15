import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

const HeaderText = styled.p`
    font-size: 18px;
    font-weight: 300;
`
const HeaderContacts = styled.p`
    color: #2a2a2a;
    font-size: 13px;
    font-weight: 300;

    strong {
        display: block;
        font-size: 21px;
        font-weight: 700;
    }
`
const HeaderCallButton = styled.button`
    background-color: #3fc7db;
    border-radius: 30px;
    font-size: 14px;
    color: #fff;
    border: none;
    padding: 13px 20px;
`

const StrongText = (props) => {
    return <strong> {props.text} </strong>
}

class Header extends Component {
    render() {
        return (
            <Row>
                <Col lg={3}>
                    <HeaderText>Ремонт айфонов в сервисном центре и на выезде</HeaderText>
                </Col>
                <Col lg={3} lgOffset={1}>
                    <HeaderContacts>пн-пт с 10 до 20, сб,вс с 11 до 18
                        <StrongText text="Ленинская, 301" />
                    </HeaderContacts>
                </Col>
                <Col lg={3}>
                    <HeaderContacts>Звонки принимаются 24 часа
                        <StrongText text="8 (846) 922 55 44" />
                    </HeaderContacts>
                </Col>
                <Col lg={2}>
                    <HeaderCallButton>Заказать звонок!</HeaderCallButton>
                </Col>
            </Row>
        );
    }
}

export default Header;