import { TextField, Button } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';

function DadosUsuario({ aoEnviar }) {
    const [senha, setSenha] = useState("");
    const [email, setEmail] = useState("");
    const validacoes = useContext(ValidacoesCadastro);
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if (possoEnviar()) {
                aoEnviar({ email, senha });
            }
        }}>
            <TextField id="email" label="email" type="email" variant="outlined"
                value={email}
                name="email"
                onChange={(event) => { setEmail(event.target.value) }}
                margin="normal"
                fullWidth
                required />
            <TextField
                id="senha"
                onChange={(event) => { setSenha(event.target.value) }}
                label="senha"
                type="password"
                variant="outlined"
                value={senha}
                name="senha"
                onBlur={validarCampos}
                error={!erros.senha.valido}
                helperText={erros.senha.texto}
                margin="normal"
                fullWidth
                required
            />
            <Button type="submit" variant="contained" color="primary">Próximo</Button>
        </form>
    );
}

export default DadosUsuario;