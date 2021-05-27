import React, { useState, useMemo, useCallback } from 'react';
import Navbar from './components/Navbar';
import { Counter } from './components/Counter';
import { likesCounter } from './service/likesCounter';
import { Button } from './components/Button';
import Repos from './components/Repos';
import { Link } from "react-router-dom";


const SEARCH = "https://api.github.com/search/repositories";

function Aula3() {
    const [totalLikes, setTotalLikes] = useState(0);
    const [dark, setDark] = useState(false);

    const getRepositories = useCallback(() => fetch(`${SEARCH}?q=facebook`), []);

    const likes = useMemo(() => likesCounter(totalLikes), [totalLikes]);

    const theme = useMemo(() => ({
        color: dark ? "#fff" : "#333",
        backgroundColor: dark ? "#000000" : "#e2e2e2",
        backgroundColorTotal: dark ? "#0e0e0e" : "#ffffff"
    }), [dark]);


    const toogleDarkMode = () => setDark(prevState => setDark(!prevState));

    return (
        <div className="container">
            <Link to="/">Início</Link>
            <h2 className="titulo-principal">useCallback:</h2>
            <p>retornará uma versão memoizada do callback que só muda se uma das entradas tiverem sido alteradas. Isto é útil quando utilizamos callbacks a fim de otimizar componentes filhos, que dependem da igualdade de referência para evitar renderizações desnecessárias </p>
            <p>useCallback está controlando os repositórios</p>
            <h2 className="titulo-principal">useMemo:</h2>
            <p>recuperará o valor memoizado quando o array receber uma atualização. Esta otimização ajuda a evitar cálculos caros em cada renderização.</p>
            <p>useMemo está controlando o tema e os likes</p>
            <div style={theme} className="App" >
                <Navbar theme={theme} toogleDarkmode={toogleDarkMode} />
                <Counter likes={likes} theme={theme} />
                <Repos getRepositories={getRepositories} theme={theme} />
                <Button totalLikes={totalLikes} setTotalLikes={setTotalLikes} />
            </div>
        </div>
    );
}
export default Aula3;