import React from 'react';

const ValidacoesCadastro = React.createContext({
    // informações default, se não tiver nenhum Provider passando as infos, serão usadas as definições abaixo
    cpf: semValidacao,
    senha: semValidacao,
    nome: semValidacao,
});

function semValidacao(dados){
    console.log(dados);
    return {valido: true, texto: ""}
}

export default ValidacoesCadastro;