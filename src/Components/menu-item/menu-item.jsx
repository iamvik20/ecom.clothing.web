import React from 'react';
import './menu-item.scss';
import { withRouter } from 'react-router';

const MenuItem = ({ title, imageUrl, size, key, history, linkUrl, match }) => (
    <div className={`${size} menu-item background-image`} onClick={() => history.push(`${match.url}${linkUrl}`)}
      style = {{
            backgroundImage: `url(${imageUrl})`
      }}
    >
        <div className='content'>
          <h1 className='title'>{title}</h1>
          <span className='subtitle'>SHOP NOW</span> 
        </div>  
    </div>
);

export default withRouter(MenuItem);