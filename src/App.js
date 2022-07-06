import './App.css';
import LogoFcc from './components/LogoFcc';
import TareaFormulario from './components/TareaFormulario';

function App() {
  return (
    <div className='container'>
      
      <div className='container-freecodecamp-logo'>
        <LogoFcc />
      </div>
      
      <div className='container-tarealista-principal'>
        <h1>Mis Tareas</h1>
        <TareaFormulario />
      </div>
    
    </div>
  );
}

export default App;
