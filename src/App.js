import './App.css';
import ListaDeTareas from './components/ListaDeTareas';
import LogoFcc from './components/LogoFcc';


/* MINUTO 6:30 */

function App() {
  return (
    <div className='container'>
      
      <div className='container-freecodecamp-logo'>
        <LogoFcc />
      </div>
      
      <div className='container-tarealista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    
    </div>
  );
}

export default App;
