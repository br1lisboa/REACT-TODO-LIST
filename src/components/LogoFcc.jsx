import React from 'react';
import './styles/LogoFcc.css';
import freeCodeCampLogo from '../img/logo-ffc.png';

function LogoFcc() {
	return (
		<img
			src={freeCodeCampLogo}
			alt='Imgagen de FreeCodeCamp'
			className='freecodecamp-logo'/>
	);
}

export default LogoFcc;