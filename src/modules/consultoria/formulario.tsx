import React from 'react';

const Forumario = (): React.ReactElement => {
  return (
    <div className='Formulario'>
      <div className='Formulario__inputs container'>
        <div>Nombre(s)
          <input type='text' placeholder='Ingrese su nombre'/>
        </div>
        <div>Apellidos
          <input type='text' placeholder='Ingrese sus apellidos'/>
        </div>
        <div>Email
          <input type='email' placeholder='Ingrese su email'/>
        </div>
        <div>Email
          <input type='checkbox'/>
        </div>
      </div>
    </div>
  );
};

export default Forumario;
