import Input from "../Input"
import styled from "styled-components"
import { useState } from "react"
import { Titulo } from "../Titulo/Titulo"
import axiosInstance from "../../service/axiosInstance"
import icon from "../../images/cash.svg"
import { IRecipe } from "../../Interfaces/IRecipe"
import down from "../../images/down.svg"
import negative from "../../images/negative.svg"

const SearchContainer = styled.section`
    background-image: #fff;
    color: #000;
    text-align: center;
    padding: 5px 0;
    height: 470px;
    width: 100%;
`

const Subtitulo = styled.h3 `
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`
const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    

    p {
        width: 200px;
    }

    img {
        width: 100px;
    }

    &:hover {
        border: 1px solid black;
    }
`

interface IRecipe{
price: number,
description: string,
date: string,
userId: number
}

interface IExpense{
  cost: number,
  description: string,
  date: string,
  userId: number
  }

function Search(rec:IRecipe,exp:IExpense) {
    const [recipesSearch, setRecipesSearch] = useState([]);
    const [expensesSearch, setExpensesSearch] = useState([]);

    const handleSearch = async (event) => {
      const textoDigitado = event.target.value.toLowerCase();
  
      try {
        const res = await axiosInstance.get(`/expenses/`+localStorage.getItem('user_id'));
        setExpensesSearch(res.data);
        const response = await axiosInstance.get(`/recipes/`+localStorage.getItem('user_id'));
        setRecipesSearch(response.data);

      } catch (error) {
        console.error("Erro ao buscar receitas:", error);
      }
    };
  
    const formatDate = (dateString: string) => {
      const date = new Date(dateString);
      return date.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    }

    return (
      <SearchContainer>
        <Titulo tamanhoFonte="36px" alinhamento="center">
          Procure aqui por suas Contas
        </Titulo>
        <Subtitulo>Organize suas despezas</Subtitulo>
        <Input
          placeholder="Procure suas contas"
          onBlur={handleSearch}
        />
        {recipesSearch.map((rec) => (
          <Resultado
          style={{
            fontSize:'17px',
          }}
          key={rec.userId}>
            <p>{rec.description}</p>
            <p
            style={{
              color:'green'
            }}
            >{rec.price}</p>
            <p>{formatDate(rec.date)}</p>
            <img src={icon}/>
          </Resultado>
        ))}
        {expensesSearch.map((exp) => (
          <Resultado 
          style={{
            fontSize:'17px',
          }}
          key={exp.userId}>
            <p>{exp.description}</p>
            <p
            style={{
              color:'red'
            }}
            >{exp.cost}</p>
            <p>{formatDate(exp.date)}</p>
            <img
            style={{
              height:'95px',
              
            }}
            src={down}/>
          </Resultado>
        ))}
      </SearchContainer>
    );
  }
  
  export default Search;