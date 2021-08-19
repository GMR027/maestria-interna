import React from 'react';
import SystemCheck from 'src/modules/system-check/system-check';
import NavBar from 'src/modules/nav-bar/nav-bar';
import Footer from 'src/modules/footer/footer';
import MediumParallax from 'src/modules/header/medium-parallax';
import { useSelector } from 'react-redux';
import SectionText from 'src/modules/section-text/section-text';
import SectionPortal from 'src/modules/portal/section-portal';

const portal = '/assets/portal.jpg';
const user = '/assets/user.jpg';

const Portal = (): React.ReactElement => {
  const system = useSelector((state: any) => state.system);
  const prefix = system.platform.prefix;
  const headerPortalURL = `${prefix}${portal}`;
  const userURL = `${prefix}${user}`;
  return (
    <>
      <NavBar/>
      <MediumParallax
        image={headerPortalURL}
        title='Portal MI'/>
      <SectionText text='Bienvenido a tu portal educativo MI. En este portal encontraras toda la información necesaria para tu formación en tu curso contratado.'/>
      <SectionPortal
        image={userURL}/>
      <Footer/>
      <SystemCheck />
    </>
  );
};

export default Portal;
