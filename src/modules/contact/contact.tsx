import React from 'react';
import SquareContact from 'src/modules/contact/square-contact';
import Title from 'src/modules/title/title';

const Contact = (): React.ReactElement => {
  return (
    <div className="Contact amber">
      <Title
        text='Contacto'/>
      <div className='container'>
        <div className='Contact__row row'>
          <div className='col s12 m4'>
            <SquareContact
              icon='add_location'
              item='https://goo.gl/maps/XLAfL4xMhAizXLNC6'
              text='Calle del Meson #381 col. Camino real La Paz Baja California Sur CP: 23088'/>
          </div>
          <div className='col s12 m4'>
            <SquareContact
              icon='email'
              item='mailto: e.gm27@outlook.com'
              text='e.gm27@outlook.com'/>
          </div>
          <div className='col s12 m4'>
            <SquareContact
              icon='call'
              item='tel: 6121113092'
              text='52 + 6121113092'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

