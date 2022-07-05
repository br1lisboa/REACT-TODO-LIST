import React from 'react';
import './styles/Tarea.css';
import { AiOutlineCloseCircle } from 'react-icons/ai'; 

const Tarea = ({ texto, completada }) => {
	return (
		<div className={completada ? 'container-tarea completada' : 'container-tarea'}>
			
			<div className="tarea-texto">
				{texto}
			</div>
			
			<div className="tarea-container-iconos">
				<AiOutlineCloseCircle className='tarea-icono' />
			</div>
		
		</div>
	);
}

export default Tarea;