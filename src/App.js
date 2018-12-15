import React, { Component } from 'react';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import styled from 'styled-components';

import Header from './components/Header.jsx';
import Navigation from './components/Navigation.jsx';
import Main from './components/Main.jsx';

const url = process.env.PUBLIC_URL + '/img/main_bg.png';

const NavWrapper = styled.header`
   width: 100;
   background-color: #242424;
   opacity: 0.8;
`
const HeaderWrapper = styled.div`
   background-color: #fff;
   color: #464646;
   padding: 20px 0;
   display: flex;
   align-items: center;
`
const MainWrapper = styled.main`
   background: url(${url}) no-repeat left center / cover;
   min-height: 600px;
   display: flex;
   align-items: center;
`
class App extends Component {
   render() {
      return (
         <div className="App">
            <NavWrapper>
               <Grid>
                  <Navigation/>
               </Grid>
            </NavWrapper>
            <HeaderWrapper>
               <Grid>
                  <Header/>
               </Grid>
            </HeaderWrapper>
            <MainWrapper>
               <Grid>
                  <Main></Main>
               </Grid>
            </MainWrapper>
         </div>
      );
   }
}

export default App;
