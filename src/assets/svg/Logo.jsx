import * as React from "react";
import logo from '../img/logo.png';

function SvgComponent(props) {
  return (
    <img src={logo} alt="EcoData logo" style={{
      // transform: 'scale(0.18)',
      width: '180px',
      padding: '10px',
    }} />
  );
}

export default SvgComponent;
