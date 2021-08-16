import React from 'react';
import { useSelector } from 'react-redux';
import Parallax from 'src/modules/header/parallax';

const headerPictureFile = '/assets/header.jpg';

const Header = (): React.ReactElement => {
  const system = useSelector((state: any) => state.system);
  const prefix = system.platform.prefix;
  const headerPictureURL = `${prefix}${headerPictureFile}`;
  return (
    <Parallax
      image={headerPictureURL}
      title='MAESTRIA INTERNA'/>
  );
};

export default Header;
