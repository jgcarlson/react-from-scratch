import * as React from 'react';
import * as ReactDOM from 'react-dom';
import NavMain from './NavMain';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NavMain />, div);
});