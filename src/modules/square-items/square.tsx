import React from 'react';
import { Link } from 'react-router-dom';
import 'src/modules/square-items/square.scss';

const Square = (props: any): React.ReactElement => {
  return (
    <Link
      className="Square"
      to='/'>
      <div className="Square__card">
        <div className="Square__section">
          <div
            className="Square__image"
            style={{backgroundImage: `url(${props.image})`}}>
          </div>
          <div className="Square__title grey-text text-darken-4">{props.title}</div>
          <div className="Square__text grey-text">
            <p>Clic para más información</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Square;
