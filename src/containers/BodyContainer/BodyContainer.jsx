import React from 'react';
import Note from './../../components/Note/Note';

export default class BodyContainer extends React.Component {
  render() {
    return (
      <div>
        <h4>This is the body container.</h4>
        <Note title='Note 1' subtitle='Subtitle 1' content='This is the notes content.' />
      </div>
    );
  }
}
