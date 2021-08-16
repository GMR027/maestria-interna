import React from 'react';
import { useSelector } from 'react-redux';
import Square from 'src/modules/square-items/square';
import Title from 'src/modules/title/title';

const capacitation = '/assets/education.jpg';
const consultoria = '/assets/consult.jpg';
const portal = '/assets/portal.jpg';

const SquareItems = (): React.ReactElement => {
  const system = useSelector((state: any) => state.system);
  const prefix = system.platform.prefix;
  const capacitationURL = `${prefix}${capacitation}`;
  const consultoriaURL = `${prefix}${consultoria}`;
  const portalURL = `${prefix}${portal}`;

  return (
    <div>
      <Title text='Servicios'/>
      <div className='container'>
        <div className='row'>
          <div className='col s12 m4'>
            <Square
              image={capacitationURL}
              title='Capacitación'/>
          </div>
          <div className='col s12 m4'>
            <Square
              image={consultoriaURL}
              title='Consultoría'/>
          </div>
          <div className='col s12 m4'>
            <Square
              image={portalURL}
              title='Portal MI Edu.'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SquareItems;
