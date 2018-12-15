import React, { Component } from 'react';
import styled from 'styled-components';

const StyledLink = styled.a `
    color: #fff;
    font-size: 14px;
    font-weight: 300;
    padding-right: 30px;
    border-right: 1px dotted #fff;
    min-height: 30px;
    display: flex;
    align-items: center;
    transition: ease .4s;
    
    &:hover {
        color: #8d8d8d;
        text-decoration: none;
    }
    &:last-child {
        border-right: none;
    }
`;

class Link extends Component {
    render() {
        return (
            <StyledLink href={this.props.link}> {this.props.text} </StyledLink>
        );
    }
}

export default Link;