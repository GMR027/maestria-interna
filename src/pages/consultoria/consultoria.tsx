import React from 'react';
import SystemCheck from 'src/modules/system-check/system-check';
import NavBar from 'src/modules/nav-bar/nav-bar';
import Footer from 'src/modules/footer/footer';
import Forumario from 'src/modules/consultoria/formulario';
import MediumParallax from 'src/modules/header/medium-parallax';
import SectionText from 'src/modules/section-text/section-text';
import { useSelector } from 'react-redux';

const headerConsultoría = '/assets/consult.jpg';

const Consultoria = (): React.ReactElement => {
  const system = useSelector((state: any) => state.system);
  const prefix = system.platform.prefix;
  const headerPictureURL = `${prefix}${headerConsultoría}`;
  return (
    <>
    <NavBar/>
    <MediumParallax
        image={headerPictureURL}
        title='CONSULTORÍA'/>
    <SectionText text='Por favor llene los datos que a continuación se le solicitan. La consultoría sera recibida con los datos recabados en esta sección y nuestro grupo de Maestría Interna se pondrá en contacto con usted.'/>
    <Forumario/>
    <Footer/>
    <SystemCheck/>
    </>
  );
};

export default Consultoria;
