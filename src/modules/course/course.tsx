import React from 'react';
import SectionText from 'src/modules/section-text/section-text';
import Square from 'src/modules/square-items/square';
import { useSelector } from 'react-redux';
import 'src/modules/course/course.scss';
import MediumParallax from 'src/modules/header/medium-parallax';

const certificado = '/assets/certificado.jpeg';
const soport = '/assets/soportecurso.jpeg';
const portal = '/assets/portalcurso.jpeg';

const Course = (props:any): React.ReactElement => {
  const system = useSelector((state: any) => state.system);
  const prefix = system.platform.prefix;
  const certificadoURL = `${prefix}${certificado}`;
  const soportURL = `${prefix}${soport}`;
  const portalURL = `${prefix}${portal}`;
  return (
    <div>
      <MediumParallax
        image={props.imageparallax}
        title={props.titleparallax}/>
      <SectionText text={props.textDescripcion}/>
      <div className='container'>
        <div className='row'>
          <div className='col s12 m4'>
            <Square
              image={certificadoURL}
              title='Certificado'
              text='Obtén un certificado por tu tiempo y esfuerzo tomado en el curso'/>
          </div>
          <div className='col s12 m4'>
            <Square
              image={soportURL}
              title='Soporte'
              text='Ten soporte de los temas de tu curso por 3 meses'/>
          </div>
          <div className='col s12 m4'>
            <Square
              image={portalURL}
              title='Portal MI'
              text='Accede a un portal de información de tu curso'/>
          </div>
        </div>
        <div className='row grey lighten-3 section-information'>
          <div className='col s12'>
            <div>
              <h3 className='title-info'>¿A quien esta dirigido?</h3>
              <div>
                <ul className='text-info'>
                  <li>{props.user1}</li>
                  <li>{props.user2}</li>
                  <li>{props.user3}</li>
                  <li>{props.user4}</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className='title-info'>Numero de módulos del software: {props.numerocursos}</h3>
              <div>
                <ul className='text-info'>
                  <li>{props.modulo1}</li>
                  <li>{props.modulo2}</li>
                  <li>{props.modulo3}</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className='title-info'>Duración de cada módulo</h3>
              <p className='text-info'>20 Horas</p>
            </div>
            <div>
              <h3 className='title-info'>Horarios de cursos</h3>
              <ul className='text-info'>
                <li>Lunes a viernes: 2 horas cada día, horario nocturno</li>
                <li>Sabatino: 5 horas cada sabado, horario matutino</li>
              </ul>
            </div>
            <div>
              <h3 className="title-info">Costo por cada módulo (Incluye iva)</h3>
              <ul className="text-info">
                <li>1 a 2 personas: $5,208.4 MXN</li>
                <li>3 personas en adelante: $4,408 MXN</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className="boton-temarios">
          <a
            className='text-boton waves-effect waves-light amber pulse btn'
            href={props.pdf}
            target='_blank'
            rel='noreferrer'>Ver temarios de curso
          </a>
        </div>
      </div>
    </div>
  );
};

export default Course;
