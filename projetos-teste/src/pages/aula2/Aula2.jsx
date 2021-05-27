import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './aula2.css';

function Aula2() {
    const [count, setCount] = useState(0);
    //assim que renderizar a tela após clicar o botão, o título da página irá atualizar
    useEffect(() => {
        document.title = `Vicê clicou ${count} vezes`;
    });
    return (
        <div className="container">
            <Link to="/">Início</Link>
            <p>Neste caso o useEffect está sendo usado para trocar o título da aba após a renderização da página</p>
            <div className="box-botoes">
                <h2 className="titulo-principal">Você clicou {count} vezes</h2>
                <button onClick={() => setCount(count + 1)} >
                    Clique aqui
                </button>
            </div>
        </div>
    );
}

export default Aula2;