import React from 'react';

const Header = ({ title, subtitle }) => {
  return (
    <div>
      <h1 className="title">{title}</h1>
      <p className="title">{subtitle}</p>
    </div>
  )
}

export default Header;