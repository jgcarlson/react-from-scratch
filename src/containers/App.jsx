import React from 'react';
import './App.css';
import HeaderContainer from './HeaderContainer/HeaderContainer';
import BodyContainer from './BodyContainer/BodyContainer';
import FooterContainer from './FooterContainer/FooterContainer';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        <BodyContainer />
        <FooterContainer />
      </div>
    );
  }
}
