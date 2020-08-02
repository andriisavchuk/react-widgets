import React from 'react';
import Link from './Link';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/" className="item">
        Accordion Widget
      </Link>
      <Link href="/dropdown" className="item">
        Dropdown Widget
      </Link>
      <Link href="/wiki-search" className="item">
        Search In Wikipedia Widget
      </Link>
      <Link href="/translate" className="item">
        Translate Widget
      </Link>
    </div>
  );
};

export default Header;
