import React from 'react';
import SystemCheck from 'src/modules/system-check/system-check';
import NavBar from 'src/modules/nav-bar/nav-bar';
import Footer from 'src/modules/footer/footer';
import Course from 'src/modules/course/course';
import { useSelector } from 'react-redux';

const header3dsmax = '/assets/header3dsmax.jpg';
const pdf = '/assets/pdf/temarioejemplo.pdf';

const TresDmax = (): React.ReactElement => {
  const system = useSelector((state: any) => state.system);
  const prefix = system.platform.prefix;
  const header3dsmaxURL = `${prefix}${header3dsmax}`;
  const pdfURL = `${prefix}${pdf}`;

  return (
    <>
      <NavBar/>
      <Course
        imageparallax={header3dsmaxURL}
        titleparallax='3ds Max'
        textDescripcion='Entra en el mundo 3D donde aprenderás el uso de las herramientas principales para convertirte en un artista 3D. 3Ds max es uno de los software mayor demandados en la industria de medios y entretenimientos (M&E) para generar videojuegos, proyectos de visualización, y películas. '
        user1='Estudiantes de arquitectura y diseño'
        user2='Diseñadores / interioristas'
        user3='Desarrolladores de videojuegos'
        user4='Todo aquel usuario que desee aprender a modelar en 3d para visualización'
        numerocursos='3 modulos'
        modulo1='Fundamentos'
        modulo2='Intermedio'
        modulo3='Avanzado'
        pdf={pdfURL}/>
      <Footer/>
      <SystemCheck />
    </>
  );
};

export default TresDmax;
