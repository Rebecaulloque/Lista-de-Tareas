import './App.css';
import ListaDeTareas from './componentes/lista-de-tareas';

function App() {
  return (
    <div className="aplicacion-tareas">

      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />              
      </div>
      
    </div>
  );
}

export default App;