import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Accordion Widget
      </Link>
      <Link to="/dropdown" className="item">
        Dropdown Widget
      </Link>
      <Link to="/wiki-search" className="item">
        Search In Wikipedia Widget
      </Link>
      <Link to="/translate" className="item">
        Translate Widget
      </Link>
    </div>
  );
};

export default Header;
