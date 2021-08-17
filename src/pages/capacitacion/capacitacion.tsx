import React from 'react';
import SystemCheck from 'src/modules/system-check/system-check';
import NavBar from 'src/modules/nav-bar/nav-bar';
import Footer from 'src/modules/footer/footer';
import MeiumParallax from 'src/modules/header/medium-parallax';
import { useSelector } from 'react-redux';
import SectionText from 'src/modules/section-text/section-text';
import SquareAutodesk from 'src/modules/grid-capacitacion/autodesk';
import SquareMcTrimble from 'src/modules/grid-capacitacion/mc-trimble';
import SquareVray from 'src/modules/grid-capacitacion/vray';

const headerCapacitacion = '/assets/headereducation.jpg';

const Capacitacion = (): React.ReactElement => {
  const system = useSelector((state: any) => state.system);
  const prefix = system.platform.prefix;
  const headerPictureURL = `${prefix}${headerCapacitacion}`;
  return (
    <>
      <NavBar/>
      <MeiumParallax
        image={headerPictureURL}
        title='CAPACITACIÓN'/>
      <SectionText text='Seleccione el software de acuerdo al fabricante para tener más información al respecto con nuestros cursos.'/>
      <SquareAutodesk/>
      <SquareMcTrimble/>
      <SquareVray/>
      <Footer/>
      <SystemCheck />
    </>
  );
};

export default Capacitacion;
