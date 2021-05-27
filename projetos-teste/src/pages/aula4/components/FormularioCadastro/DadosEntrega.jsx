import { TextField, Button } from '@material-ui/core';
import React, { useState } from 'react';

function DadosEntrega({ aoEnviar }) {
    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");
    return (
        <form onSubmit={
            (event) => {
                event.preventDefault();
                aoEnviar({ cep, endereco, numero, estado, cidade });
            }
        }>
            <TextField id="cep" label="Cep" type="number" variant="outlined"
                value={cep}
                onChange={(event) => setCep(event.target.value)}
                margin="normal" required />
            <TextField id="endereco" label="Endereço" type="text" variant="outlined"
                value={endereco}
                onChange={(event) => setEndereco(event.target.value)}
                margin="normal"
                fullWidth
                required />
            <TextField id="numero" label="Número" type="number" variant="outlined"
                value={numero}
                onChange={(event) => setNumero(event.target.value)}
                margin="normal" required />
            <TextField id="estado" label="Estado" type="text" variant="outlined"
                value={estado}
                onChange={(event) => setEstado(event.target.value)}
                margin="normal" required />
            <TextField id="cidade" label="Cidade" type="text" variant="outlined"
                value={cidade}
                onChange={(event) => setCidade(event.target.value)}
                margin="normal" required />
            <Button type="submit" variant="contained" color="primary" fullWidth>
                Finalizar Cadastro
            </Button>
        </form>
    );
}

export default DadosEntrega;