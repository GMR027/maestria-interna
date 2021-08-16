import React from 'react';
import 'src/modules/section-text/section-text.scss';

const SectionText = (props: any): React.ReactElement => {
  return (
    <div className='Text amber'>
      <div className="container Text__info">{props.text}</div>
    </div>
  );
};

export default SectionText;
