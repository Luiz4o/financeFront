import React, { useState } from 'react'
import styled from "styled-components";
import Input from '../../components/Input';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../../service/axiosInstance';


 const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
`;

 const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 1px 2px #0003;
  background-color: white;
  max-width: 350px;
  padding: 20px;
  border-radius: 5px;
`;

 const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: #676767;
`;

 const LabelSignin = styled.label`
  font-size: 16px;
  color: #676767;
`;

 const LabelError = styled.label`
  font-size: 14px;
  color: red;
`;

 const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: #676767;
  }
`;

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const handleSignup = async() => {
    try{
      setError("");

    if (!name || !email || !emailConf || !password) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;
    }

    const res = await axiosInstance.post('/auth/register',{
      name,
      email,
      password
    })

    if (response.data.error) {
      setError(response.data.error);
    } else {
      alert("Usuário cadastrado com sucesso!");
      navigate("/");
    }
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);
    setError("Erro ao cadastrar usuário. Por favor, tente novamente mais tarde.");
  }
};

  return (
    <Container>
      <Label>SISTEMA DE LOGIN</Label>
      <Content>
      <Input
          type="text"
          placeholder="Digite seu Nome"
          value={name}
          onChange={(e) => [setName(e.target.value), setError("")]}
        />
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="email"
          placeholder="Confirme seu E-mail"
          value={emailConf}
          onChange={(e) => [setEmailConf(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={password}
          onChange={(e) => [setPassword(e.target.value), setError("")]}
        />
        <LabelError>{error}</LabelError>
        <button onClick={handleSignup}
        style={{
          border: '1px solid #000',
          background: '#000',
          padding: '10px 10px',
          borderRadius: '100px',
          textAlign: 'center',
          color: '#FFF',
          display:'flex',
          fontSize: '18px',
          marginBottom: '10px',
          alignItems:'center',
          cursor: 'pointer',
          width: '20vh',
          whiteSpace: 'nowrap',  // Evita que o texto quebre para a próxima linha
          textOverflow: 'ellipsis',
          justifyContent:'center'}}
        >Inscrever-se</button>
        <LabelSignin>
          Já tem uma conta?
          <Strong>
            <Link to="/">&nbsp;Entre</Link>
          </Strong>
        </LabelSignin>
      </Content>
    </Container>
  );
}

export default Signup;