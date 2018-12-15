import React, { Component } from 'react';
import Link from './Link.jsx';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

const List = styled.ul `
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    margin: 0;
`;

class Navigation extends Component {
    state = {
        links: [
            {text: 'Вызов мастера'},
            {text: 'Прайс на ремонт'},
            {text: 'Наши преимущества'},
            {text: 'Схема работы'},
            {text: 'Отзывы клиентов'},
            {text: 'Примеры работ'},
            {text: 'Контакты'}
        ]
    }
    render() {
        return (
            <Row>
                <Col lg={12}>
                    <nav>
                        <List>
                            {this.state.links.map((link,id) => {
                                return <Link link="#" text={link.text} key={id}/>
                            })}
                        </List>
                    </nav>
                </Col>
            </Row>
        );
    }
}

export default Navigation;