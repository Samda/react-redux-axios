import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className="ui fix menu">
      <div className="ui container center">
        <h2><Link to={'/'} >Hello</Link></h2>
      </div>
    </div>
  );
}

export default Header;