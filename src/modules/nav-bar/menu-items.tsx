import React from 'react';
import { Link } from 'react-router-dom';

const MenuItems = ( props: any ): React.ReactElement => {
  return (
    <>
      <li>
        <em
          className='SideNavBar__logo hide-on-large-only'style={{
          backgroundImage: `url(${props.logo})`
        }}></em>
      </li>
      <li>
        <Link
          to='/capacitacion'
          className='grey-text text-darken-3'>
          Capacitación
        </Link>
      </li>
      <li>
        <Link
          to='/consultoria'
          className='grey-text text-darken-3'>
          Consultoría
        </Link>
      </li>
      <li>
        <Link
          to='/portal'
          className='grey-text text-darken-3'>
          Portal
        </Link>
      </li>
    </>
  );
};

export default MenuItems;
