import React from 'react';
import 'src/modules/section-text/section-text.scss';

const SectionText = (props: any): React.ReactElement => {
  return (
    <div className='Text amber'>
      <div className='container row Text__info'>
        <div className='col m1 hide-on-small-only'></div>
        <div className='container col s12 m10'>{props.text}</div>
        <div className='col m1 hide-on-small-only'></div>
      </div>
    </div>
  );
};

export default SectionText;
