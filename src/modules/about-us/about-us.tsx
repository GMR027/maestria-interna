import React from 'react';
import { useSelector } from 'react-redux';
import ImageText from 'src/modules/about-us/image-text';

const aboutUS = '/assets/nosotros.jpg';

const AboutUs = (): React.ReactElement => {
  const system = useSelector((state: any) => state.system);
  const prefix = system.platform.prefix;
  const aboutURL = `${prefix}${aboutUS}`;
  return (
    <ImageText
      image={aboutURL}
      text='Maestría interna es un portal de formación para cualquier persona, independiente su grado educativo o laboral que desee maximizar sus herramientas de trabajo y propuestas laborales. Los instructores de Maestría interna llevaran tus conocimientos al siguiente escalón que necesitas para crecer.'/>
  );
};

export default AboutUs;
