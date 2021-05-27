import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Container, Typography } from "@material-ui/core"
import { validarCPF, validarSenha } from "./models/cadastro";
import ValidacoesCadastro from "./contexts/ValidacoesCadastro";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Link to="/">Início</Link>
        <p>useState: está controlando o está dos dados que o usuário vai digitar</p>
        <p>useEffect: está sendo usado para controlar a fase que o formulário se encontra</p>
        <p>useContext: está sendo usado para criar um contexto de validações entre os arquivos</p>
        <p>Hooks personalizados (useErros): função de validações comum para vários components </p>
        <Container component="article" maxWidth="sm">
          <Typography variant="h3" component="h1" align="center" >Formulário de cadastro</Typography>
          {/* Quem estiver dentro do Provider abaixo vai conhecer o contexto definido */}
          <ValidacoesCadastro.Provider value={{ cpf: validarCPF, senha: validarSenha, nome: validarSenha }}>
            <FormularioCadastro aoEnviar={aoEnviarForm} />
          </ValidacoesCadastro.Provider>

          {/*Aqui o formulário vai usar as informações default definidas no context ValidacoesCadastro pois não está dentro de um Provider*/}
          {/* <FormularioCadastro aoEnviar={aoEnviarForm} /> */}

        </Container>
      </div>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}

export default App;

//Provider: provedor do contexto vai conter as informações, quem usar o contexto de ValidacoesCadastro pode conhecer esse contexto que está no value