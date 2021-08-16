import React from 'react';
import 'src/modules/header/header.scss';

const Parallax = (props: any): React.ReactElement => {
  return (
    <div className="Header">
      <div className='Header__black'></div>
      <div
        className='Header__img'
        style={{backgroundImage: `url(${props.image})`}}>
      </div>
      <div className='Header__title white-text center-align'>{props.title}</div>
      <div className='Header__line'></div>
    </div>
  );
};

export default Parallax;
