import { useState } from "react";
import styles from './button.module.css'

export default function MeuContador() {

  const [contador, setContador] = useState(0)

  

function aumentar(){
    setContador(contador + 1)
}

  return (
    <div  className="container">
      <h1>Meu Contador</h1>
      { contador > 9 ? <h2>Valor muito Grande</h2>: null}
      <h3>{contador}</h3>
      <button className={styles.myButton} onClick={aumentar}>aumentar</button>
    </div>
  );
}
