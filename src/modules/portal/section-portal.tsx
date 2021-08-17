import React from 'react';
import 'src/modules/portal/section-portal.scss';
import Title from 'src/modules/title/title';

const SectionPortal = (props: any): React.ReactElement => {
  return (
    <div className='SectionPortal container'>
      <div className='row'>
        <div className='col s12 m4'>
          <div
            className='SectionPortal__img'
            style={{backgroundImage: `url(${props.image})`}}>
          </div>
        </div>
        <div className='col s12 m8'>
          <Title text='¿Que incluye este portal?'/>
          <div className='container'>
            <div>
              <ul>
                <li>
                  <i className='material-icons left'>computer</i>Acceso potscurso por 3 meses
                </li>
              </ul>
              <ul>
                <li>
                  <i className='material-icons left'>book</i>Acceso a documentos publicos y privados
                </li>
              </ul>
              <ul>
                <li>
                  <i className='material-icons left'>cloud_download</i>Formatos y almacenamiento del software en curso
                </li>
              </ul>
              <ul>
                <li>
                  <i className='material-icons left'>chat_bubble</i>Soporte del curso
                </li>
              </ul>
            </div>
            <div className='SectionPortal__button'>
              <a
                href='https://sites.google.com/view/portalmi/p%C3%A1gina-principal'
                className='waves-effect waves-light amber pulse btn'
                target='_blank'
                rel='noreferrer'>Acceder a Portal</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionPortal;
