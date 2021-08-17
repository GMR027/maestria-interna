import React from 'react';
import 'src/modules/header/header.scss';

const Parallax = (props: any): React.ReactElement => {
  return (
    <div className="Header">
      <div
        className='Header__img'
        style={{backgroundImage: `url(${props.image})`}}>
          <div className='Header__black'>
            <div className='Header__text container'>
              <div className='Header__title white-text'>{props.title}</div>
              <div className='Header__line'></div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Parallax;
