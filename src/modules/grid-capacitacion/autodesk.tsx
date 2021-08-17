import React from 'react';
import { useSelector } from 'react-redux';
import Square from 'src/modules/square-items/square';
import Title from 'src/modules/title/title';

const revit = '/assets/revit.png';
const trsmax = '/assets/3dsmax.png';
const infraworks = '/assets/infraworks.png';
const sketchbook = '/assets/sketchbook.png';

const SquareAutodesk = (): React.ReactElement => {
  const system = useSelector((state: any) => state.system);
  const prefix = system.platform.prefix;
  const revitURL = `${prefix}${revit}`;
  const trsmaxURL = `${prefix}${trsmax}`;
  const infraworksURL = `${prefix}${infraworks}`;
  const sketchbookURL = `${prefix}${sketchbook}`;

  return (
    <div>
      <Title text='Autodesk'/>
      <div className='container'>
        <div className='row'>
          <div className='col s12 m4'>
            <Square
              image={revitURL}
              title='Revit Architecture'
              link='/capacitacion'/>
          </div>
          <div className='col s12 m4'>
            <Square
              image={revitURL}
              title='Revit Estructural'
              link='/capacitacion'/>
          </div>
          <div className='col s12 m4'>
            <Square
              image={revitURL}
              title='Revit Mep'
              link='/capacitacion'/>
          </div>
          <div className='col s12 m4'>
            <Square
              image={trsmaxURL}
              title='3ds Max'
              link='/capacitacion'/>
          </div>
          <div className='col s12 m4'>
            <Square
              image={infraworksURL}
              title='Infraworks'
              link='/capacitacion'/>
          </div>
          <div className='col s12 m4'>
            <Square
              image={sketchbookURL}
              title='Sketchbook'
              link='/capacitacion'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SquareAutodesk;
