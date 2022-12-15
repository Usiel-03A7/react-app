//props son las propiedades que se tienen en la
import { useState, useEffect } from 'react'; // useState ayuda a saber 
//el estado del componente y poder modificarlo

/**
 * @param {{ message: string, name: number }} props 
 * @param {[conter: number] setCounter: function} useState_hook
 */

export default function Welcome({ message, name }) {
  let [counter, setCounter] = useState(0);
  const [semaforo, setSemaforo] = useState(false);

  const contar = ()=>{
     setCounter(counter+1)
     setSemaforo(!semaforo)
  };

  return (
    <div>
      <h2>Hola {name}</h2>
      <h3>contador de react con hooks</h3> {/**/}
      <h4>la suma del contador es: {counter}:</h4>
      <p>El semaforo está en color {semaforo ? "verde" : "rojo"}</p>
      <button type="submit" onClick={contar}>
        Sumar contador
      </button>
    </div>
  )
}