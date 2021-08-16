import React from 'react';
import Title from 'src/modules/title/title';
import 'src/modules/about-us/image-text.scss';

const ImageText = (props: any): React.ReactElement => {
  return (
    <div
      className="ImageText"
      style={{backgroundImage: `url(${props.image})`}}>
      <div className="ImageText__black">
      <Title
        text='¿Quienes Somos?'
        color='white'/>
      <div className="ImageText__text container white-text">{props.text}</div>
      </div>
    </div>
  );
};

export default ImageText;
