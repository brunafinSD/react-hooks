import { useState } from 'react';
import { Link } from "react-router-dom";
import Button from "./exemploButton/Button";
import { Container, ButtonSearch, Item, Content, Input, MiddleContent, WrapperInput } from './exemploFavoritos/styles';
import List from './exemploFavoritos/components/List/index';
import axios from './exemploFavoritos/Axios/axios';
import './aula1.css';

function Aula1() {
    const [toggle, setToggle] = useState(0);
    const [repos, setRepos] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [user, setUser] = useState('');


    const addRepos = async () => {
        await axios.get(`/${user}/repos`).then((response) => setRepos(response.data)).catch(err => console.log(err));
    }
    return (
        <div className="container">
            <Link to="/">Início</Link>
            <div className="container">
                <h2 className="titulo-principal">Exemplo botões</h2>
                <div className="container-botoes">
                    <p>Abaixo 4 botões onde cada um faz algo diferente, counter é o número iniciado em 10</p>
                    <p>neste cenário o useState guarda o valor de counter, a cada vez que o botão é clicado, o estado de counter muda</p>
                    <Button title="+1" color="green"></Button>
                    <Button title="+10" color="blue">mais</Button>
                    <Button title="dobrar" color="orange"></Button>
                    <Button title="-1" color="red"></Button>
                </div>
            </div>
            <div className="container">
                <h2 className="titulo-principal">Exemplo Favoritar repositórios</h2>
                <p>nessa aplicação o useState está sendo usado para controlar o estado dos componentes:</p>
                <ul>
                    <li>Lista/Favoritos (qual está clicado)</li>
                    <li>lista de repositórios (todos repositórios que foi buscado daquele usuário será colocado no estado da lista)</li>
                    <li>lista de favoritos (somente os repositórios favoritados estará dentro do estado de favoritos)</li>
                    <li>user (será usado para passar para o axios, ele é alterado no input quando o usuário digita o nome que quer pesquisar)</li>
                </ul>
                <Container>
                    <Content>
                        <WrapperInput>
                            <Input placeholder="Digite o nome do usuário" onChange={(event) => setUser(event.target.value)} />
                            <ButtonSearch onClick={addRepos}>Pesquisar</ButtonSearch>
                        </WrapperInput>
                        <MiddleContent>
                            <Item selected={toggle === 0} onClick={() => setToggle(0)}>List</Item>
                            <Item selected={toggle === 1} onClick={() => setToggle(1)}>Favoritos</Item>
                        </MiddleContent>
                        {toggle === 0 ?
                            <List
                                repos={repos}
                                favorite={(elemento) => setFavorites([...favorites, elemento])}
                                canFavorite={true}
                            />
                            :
                            <List
                                repos={favorites}
                                canFavorite={false}
                            />
                        }
                    </Content>
                </Container>
            </div>
        </div>
    )
}

export default Aula1;