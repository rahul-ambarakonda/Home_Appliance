
import React from 'react';

const Header: React.FC = () => {
  const headerStyle: React.CSSProperties = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '1rem',
    textAlign: 'center',
    marginBottom: '20px', // Add some space below the header
  };

  return (
    <header style={headerStyle}>
      <h1>Home Appliances</h1>
    </header>
  );
};

export default Header;
