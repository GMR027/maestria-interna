import React from 'react';
import Title from 'src/modules/title/title';
import 'src/modules/about-us/image-text.scss';

const ImageText = (props: any): React.ReactElement => {
  return (
    <div
      className='ImageText'
      style={{backgroundImage: `url(${props.image})`}}>
      <div className="ImageText__black">
        <div className='container ImageText__text'>
          <div className='row'>
            <div className='col m1 hide-on-small-only'></div>
            <div className='col s12 m10'>
              <Title
              text='¿Quienes Somos?'
              color='white'/>
            </div>
            <div className='col m1 hide-on-small-only'></div>
          </div>
          <div className='row'>
            <div className='col m1 hide-on-small-only'></div>
            <div className='white-text col s12 m10'>{props.text}</div>
            <div className='col m1 hide-on-small-only'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageText;
