import React from 'react';
import 'src/modules/header/header.scss';

const MediumParallax = (props: any): React.ReactElement => {
  return (
    <div className='MediumParallax'>
      <div
        className='MediumParallax__img'
        style={{backgroundImage: `url(${props.image})`}}>
          <div className='MediumParallax__black'>
            <div className='MediumParallax__text container'>
              <div className='MediumParallax__title white-text'>{props.title}</div>
              <div className='MediumParallax__line'></div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default MediumParallax;
