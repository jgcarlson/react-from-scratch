import * as React from 'react';
import * as ReactDOM from 'react-dom';
import HeaderContainer from './HeaderContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HeaderContainer />, div);
});