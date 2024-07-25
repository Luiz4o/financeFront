import Input from "../Input"
import styled from "styled-components"
import { useState } from "react"
import { Titulo } from "../Titulo/Titulo"
import axiosInstance from "../../service/axiosInstance"
import icon from "../../images/cash.svg"

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

function Search() {
    const [recipesSearch, setRecipesSearch] = useState([]);
  
    const handleSearch = async (event) => {
      const textoDigitado = event.target.value.toLowerCase();
  
      try {
        const response = await axiosInstance.get(`/recipes/1`);
        setRecipesSearch(response.data);
      } catch (error) {
        console.error("Erro ao buscar receitas:", error);
        // Trate o erro como preferir (por exemplo, exibindo uma mensagem de erro na UI)
      }
    };
  
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
        {recipesSearch.map((recipe) => (
          <Resultado key={recipe.id}>
            <p>{recipe.description}</p>
            <p>{recipe.price}</p>
            <img src={icon}/>
          </Resultado>
        ))}
      </SearchContainer>
    );
  }
  
  export default Search;