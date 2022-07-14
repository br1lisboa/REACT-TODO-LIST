import React from 'react';
import TareaFormulario from './TareaFormulario';
import './styles/ListaDeTareas.css';
import { useState } from 'react';
import Tarea from './Tarea';

function ListaDeTareas() {
	const [tareas, setTareas] = useState([]);
	
	const agregarTarea = tarea => {
		if (tarea.texto.trim()) {
			tarea.texto = tarea.texto.trim(); /* trim() es un metodo que nos permite sacar los espacios del principio o del final de una cadena de caracteres */
			const tareasActualizadas = [tarea, ...tareas];
			setTareas(tareasActualizadas);
		}
	}

	const eliminarTarea = id => {
		const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
		/* Aca, tareasActualizadas, va a ser el arreglo filtrado, con el metodo filter, luego filtramos
		mediante el que cumpla esta condicion va a ser incluido en el arreglo, pero si el id es igual 
		al que estamos pidiendo no lo vamos a incluir, generando una copia nueva. */
		setTareas(tareasActualizadas);
	}

	const completarTarea = id => {
		const tareasActualizadas = tareas.map (tarea => {
			if (tarea.id === id) {
				tarea.completada = !tarea.completada;
			}
			return tarea;
		});
		setTareas(tareasActualizadas);
	}

	return (
		<>
			<TareaFormulario onSubmit={agregarTarea} />
			<div className='tareas-lista-contenedor'>
				{
					tareas.map((tarea) => 
						<Tarea
							key={tarea.id} /* key es una forma que tiene react de identificar nuestro elemento en una lista */ 
							id={tarea.id}
							texto={tarea.texto}
							completada={tarea.completada}
							completarTarea={completarTarea}
							eliminarTarea={eliminarTarea}
						/>
					)
				}
			</div>
		</>
	);
}

export default ListaDeTareas;