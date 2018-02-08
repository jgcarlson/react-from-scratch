import * as React from 'react';
import * as ReactDOM from 'react-dom';
import BodyContainer from './BodyContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BodyContainer />, div);
});