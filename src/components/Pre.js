import React from 'react';

const Preloader = () => {
  const preloaderStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'linear-gradient(135deg, #219C90 30%, #D83F31 90%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
  };

  const gifStyle = {
    width: '150px', // Adjust the size of the GIF if needed
    height: '150px',
  };

  return (
    <div style={preloaderStyle}>
      <img src="/pre.svg" alt="Loading..." style={gifStyle} />
    </div>
  );
};

export default Preloader;
