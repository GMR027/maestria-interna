import React from 'react';
import SystemCheck from 'src/modules/system-check/system-check';
import NavBar from 'src/modules/nav-bar/nav-bar';
import HorizontalSpace from 'src/modules/horizontal-space/horizontal-space';
import Footer from 'src/modules/footer/footer';
import Header from 'src/modules/header/header';
import SectionText from 'src/modules/section-text/section-text';
import SquareItems from 'src/modules/square-items/square-items';
import AboutUs from 'src/modules/about-us/about-us';

const Home = (): React.ReactElement => {
  return (
    <>
      <NavBar />
      <Header/>
      <SectionText text='Bienvenido a Maestría Interna, un portal de formación de profesionales enfocado en brindar soluciones integrales manejo de software digital a Técnicos, Estudiantes, Profesionistas y especialistas en Arquitectura y diseño.'/>
      <SquareItems/>
      <AboutUs/>
      <HorizontalSpace size='large' />
      <HorizontalSpace size='large' />
      <Footer />
      <SystemCheck />
    </>
  );
};

export default Home;
