import './App.css';
import LogoFcc from './components/LogoFcc';
import Tarea from './components/Tarea';

function App() {
  return (
    <div className='container'>
      
      <div className='container-freecodecamp-logo'>
        <LogoFcc />
      </div>
      
      <div className='container-tarealista-principal'>
        <h1>Mis Tareas</h1>
        <Tarea texto='Aprender React' />
      </div>
    
    </div>
  );
}

export default App;
