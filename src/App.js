import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <div>
        <SayFullName name="Егор" surname="Гвоздев" link="vk.com" />
        <SayFullName name="Иван" surname="Иванов" link="instagram.com" />
        <SayFullName name="Петр" surname="Петров" link="facebook.com" />
      </div>
    );
  }
}

const SayFullName = (props) => {
  return (
    <div>
      <h1>Мое имя {props.name}, фамилия {props.surname}</h1>
      <a href={props.link}>Ссылка на мой профиль</a>
    </div>
  );
}

export default App;
