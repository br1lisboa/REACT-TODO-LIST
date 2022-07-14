import React from 'react';
import './styles/Tarea.css';
import { AiOutlineCloseCircle } from 'react-icons/ai'; 

const Tarea = ({ id, texto, completada, completarTarea, eliminarTarea }) => {
	return (
		<div className={completada ? 'container-tarea completada' : 'container-tarea'}>
			
			<div 
				className="tarea-texto"
				onClick={() => completarTarea(id)}>
				{texto}
			</div>
			
			<div 
				className="tarea-container-iconos"
				onClick={() => eliminarTarea(id)}>
				<AiOutlineCloseCircle className='tarea-icono' />
			</div>
		
		</div>
	);
}

export default Tarea;