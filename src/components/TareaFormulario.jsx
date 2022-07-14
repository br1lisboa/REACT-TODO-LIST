import React from 'react';
import { useState } from 'react';
import './styles/TareaFormulario.css';
import { v4 as uuidv4} from 'uuid';

const TareaFormulario = (props) => {
	const [input, setInput] = useState('');
	
	const manejarCambio = e => {
		setInput(e.target.value);
		/* console.log(e.target.value); */
	}

	const manejarEnvio = e => {
		e.preventDefault();
		const tareaNueva = {
			id: uuidv4(), /* paquete uuid para generar identificadores unicos */
			texto: input,
			completada: false
		}
		props.onSubmit(tareaNueva); /* esta funcion va a ser un props, que pasaremos a la lista de tareas */
	}						

	return(
		<form 
		className='tarea-formulario'
		onSubmit={manejarEnvio}> {/* Evento escuchador */}
			
			<input type="text"
			className='tarea-input'
			placeholder='Escribe una Tarea'
			name='texto'
			onChange={manejarCambio} 
			/>
			
			<button className='tarea-boton'>
				Agregar Tarea
			</button>
		
		</form>
	);
}

export default TareaFormulario;