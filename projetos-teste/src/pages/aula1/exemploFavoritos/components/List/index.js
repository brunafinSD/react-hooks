import React from 'react';
import {Container, Item, Name, ButtonSearch} from './styles';

const List = ({repos, favorite, canFavorite}) => {
    return (
        <Container>
            {
                repos && repos.map((el) => (
                    <Item>
                        <Name>{el.name}</Name>
                        {canFavorite && <ButtonSearch onClick={() => favorite(el)}>Favoritar</ButtonSearch>}
                    </Item>
                    
                ) )
            }
        </Container>
    )
}

export default List;
