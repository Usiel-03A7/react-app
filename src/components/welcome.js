//props son las propiedades que se tienen en la
import {useState} from 'react';
export default function Welcome (props){
    const [counter, setCounter] = useState(0);
    const {message, name} = props;
    return (
        <div>
            <h2>Hola {name}</h2>
            <h3>contador de react con hooks</h3>
            <h4>la suma del contador es: {counter}:</h4>
            <button type="submit" onClick={()=> setCounter(counter+1)}>
                Sumar contador
            </button>
            
        </div>
    )
}