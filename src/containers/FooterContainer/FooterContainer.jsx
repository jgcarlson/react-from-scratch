import React from 'react';
import Divider from 'material-ui/Divider';
import RestoreIcon from 'material-ui-icons/Restore';
import FavoriteIcon from 'material-ui-icons/Favorite';
import LocationOnIcon from 'material-ui-icons/LocationOn';

export default class FooterContainer extends React.Component {
  render() {
    return (
      <div>
        <Divider />
        <div className='footer-container'>
          <RestoreIcon />
          <FavoriteIcon />
          <LocationOnIcon />
        </div>
      </div>
    );
  }
}
