import React from 'react';
import '../hojas-de-estilo/tareas.css';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AiOutlineCheckCircle } from "react-icons/ai";

function Tarea({id, texto, completada, completarTarea, eliminarTarea}){
    return(
        <div className= {completada ? 'tarea-contenedor completada' : 'tarea-contenedor'} >
            { <div className='tarea-texto' >
                {texto}
            </div>}

            <div className={completada ? 'tarea-contenedor-iconos completada' : 'tarea-contenedor-iconos'}
            onClick={ () => completarTarea(id) } >
                <AiOutlineCheckCircle className='tarea-icono check' />
            </div>

            <div className='tarea-contenedor-iconos'
            onClick={ () => eliminarTarea(id) } >
                <AiOutlineCloseCircle className='tarea-icono borrar' />
            </div>
        </div>
    );

}


export default Tarea;