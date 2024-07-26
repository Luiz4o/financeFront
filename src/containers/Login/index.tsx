import React, {  useState } from 'react'
import Input from '../../components/Input';
import styled from "styled-components";
import {  Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../../service/axiosInstance';
// import { useAuth } from '../../components/Contexts/auth';

 const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
  background-image: linear-gradient(90deg,rgb(116, 221, 177) 35%, rgb(17, 196, 202));

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
  max-width: 600px;
  height: 650px;
  padding: 20px;
  border-radius: 10px;
`;

 const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: #676767;
`;

 const LabelSignup = styled.label`
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
  }`

  const Login: React.FC = () => {
    const navigate = useNavigate();
  
    // Estado com tipos especificados
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);


  const handleLogin = async () => {
    try{
      setError("")
    
    if (!email || !password) {
      setError("Preencha todos os campos");
      return;
    }

    const res = await axiosInstance.post('/auth/login',{
      email,
      password
    }).then((data)=>{
      localStorage.setItem('user_id',data.data.id)
      localStorage.setItem('logado', 'true');
      localStorage.setItem('user_token', data.data.token);
      return data
    }).catch((err)=> {
      alert(err.response.message)
    })


    if (res.data.error) {
      setError(res.data.error);
    } else {
      alert("Login feito com sucesso");
      setIsLoggedIn(true)
      navigate("/home");
    }}catch (error) {
      console.error('Erro ao realizar login:', error);
      setError("Erro ao realizar login. Por favor, tente novamente mais tarde.");
    }
  };

  return (
    <Container>
      
      <Content>
        <Label>SISTEMA DE LOGIN</Label>
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError(""); // Limpa o erro ao alterar o e-mail
          }}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError(""); // Limpa o erro ao alterar a senha
          }}
        />
        <LabelError>{error}</LabelError>
        <button  onClick={handleLogin}
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
        >Entrar</button>
        <LabelSignup>
          Não tem uma conta?
          <Strong>
            <Link to="/signup">&nbsp;Registre-se</Link>
          </Strong>
        </LabelSignup>
      </Content>
    </Container>
  )
}

export default Login