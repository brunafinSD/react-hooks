import { useState } from "react";

//criando hook customizado para erros
//quem usar o esse hook vai ter acesso ao estado de erros e função de validação

function useErros(validacoes) {
    const estadoInicial = criarEstadoInicial(validacoes); //rever
    const [erros, setErros] = useState(estadoInicial);

    function validarCampos(event) {
        const { name, value } = event.target;
        const novoEstado = { ...erros }
        novoEstado[name] = validacoes[name](value);
        setErros(novoEstado)
    }

    function possoEnviar() {
        for (let campo in erros) {
            if (!erros[campo].valido) {
                return false
            }
        }
        return true;
    }

    return [erros, validarCampos, possoEnviar];
}

function criarEstadoInicial(validacoes) { //rever
    const estadoInicial = {};
    for (let campo in validacoes) {
        estadoInicial[campo] = { valido: true, texto: "" };
    }
    return estadoInicial;
}

export default useErros;