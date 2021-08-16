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
          to='/expos'
          className='grey-text text-darken-3'>
          Capacitación
        </Link>
      </li>
    </>
  );
};

export default MenuItems;
