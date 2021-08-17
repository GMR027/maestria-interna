import React from 'react';
import { useSelector } from 'react-redux';
import Square from 'src/modules/square-items/square';
import Title from 'src/modules/title/title';

const rhinoceros = '/assets/rhino.png';
const sketchup = '/assets/sketchup.png';

const SquareMcTrimble = (): React.ReactElement => {
  const system = useSelector((state: any) => state.system);
  const prefix = system.platform.prefix;
  const rhinoURL = `${prefix}${rhinoceros}`;
  const sketchupURL = `${prefix}${sketchup}`;

  return (
    <div>
      <Title text='McNeel & Trimble'/>
      <div className='container'>
        <div className='row'>
          <div className='col s12 m4'>
            <Square
              image={rhinoURL}
              title='Rhinoceros'
              link='/capacitacion'/>
          </div>
          <div className='col s12 m4'>
            <Square
              image={sketchupURL}
              title='Sketchup'
              link='/capacitacion'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SquareMcTrimble;
