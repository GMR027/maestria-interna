import React from 'react';
import { useSelector } from 'react-redux';
import Square from 'src/modules/square-items/square';
import Title from 'src/modules/title/title';

const vr3dsmax = '/assets/vr3dsmax.png';
const vrrhino = '/assets/vrrhino.png';
const vrskp = '/assets/vrskp.png';

const SquareVray = (): React.ReactElement => {
  const system = useSelector((state: any) => state.system);
  const prefix = system.platform.prefix;
  const vr3dsmaxURL = `${prefix}${vr3dsmax}`;
  const vrrhinoURL = `${prefix}${vrrhino}`;
  const vrskpURL = `${prefix}${vrskp}`;

  return (
    <div>
      <Title text='Chaos Vray'/>
      <div className='container'>
        <div className='row'>
          <div className='col s12 m4'>
            <Square
              image={vr3dsmaxURL}
              title='Vray para 3ds Max'
              link='/capacitacion'/>
          </div>
          <div className='col s12 m4'>
            <Square
              image={vrrhinoURL}
              title='Vray para Rhino'
              link='/capacitacion'/>
          </div>
          <div className='col s12 m4'>
            <Square
              image={vrskpURL}
              title='Vray para Sketchup'
              link='/capacitacion'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SquareVray;
