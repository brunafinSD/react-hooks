import { Switch, Link } from 'react-router-dom';
import './menu.css'; 

function Menu() {
    return (
        <div className="container">
            <h1 className="titulo-principal">Menu de atividades</h1>
            <Switch>
                <Link to="/aula1">Hooks - useState (aula mentores)</Link>
            </Switch>
            <Switch>
                <Link to="/aula2">Hooks - useEffect (documentação)</Link>
            </Switch>
            <Switch>
                <Link to="/aula3">Hooks - useCallback/useMemo (aula mentores)</Link>
            </Switch>
            <Switch>
                <Link to="/aula4">Hooks - formulário (alura)</Link>
            </Switch>

        </div>
    );
}

export default Menu;