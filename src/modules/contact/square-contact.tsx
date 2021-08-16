import React from 'react';
import 'src/modules/contact/square-contact.scss';

const SquareContact = (props:any): React.ReactElement => {
  return (
    <div className='SquareContact'>
      <div className='SquareContact__item'>
        <a
          href={props.item}
          target='_lank'
          rel='noreferrer'>
          <div className='SquareContact__icon white-text'>
            <i className='material-icons center'>{props.icon}</i>
          </div>
          <div className='SquareContact__text grey-text text-darken-4'>{props.text}</div>
          <div className='white-text'>Clic Aquí</div>
        </a>
      </div>
    </div>
  );
};

export default SquareContact;
