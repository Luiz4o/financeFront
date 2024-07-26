import React, { useState } from "react";
import styled from "styled-components";
import Input from "../Input";
import { Titulo } from "../Titulo/Titulo";
import axiosInstance from "../../service/axiosInstance";

const CorpoForm = styled.div`
    align-items: center;
    background-color: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    margin: 0 auto;
    max-width: 500px;
    padding: 25px 20px;
    justify-content: space-around;
    width: 100%; 
    height:340px; 
    margin-bottom: 5px;
`;

const ItemForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    align-items: center;

    margin-bottom: 15px;
`
interface IFormulario{
    titulo: string,
    descricao: string,
}


function FormularioRecipe(Form:IFormulario) {
    const [price, setPrice] = useState<number | string>(0);
    const [description, setDescription] = useState("");
    const [error, setError] = useState("");


    const handleCreate = async() => {
        try{
    
        if (!price || !description ) {
          setError("Preencha todos os campos");
          return;
        }

        const parsePrice=Number(price)

        const userId=Number(localStorage.getItem('user_id'))
        
        const res = await axiosInstance.post('/createRecipe',{
          price: parsePrice,
          description,
          userId
        })
    
        if (response.data.error) {
          setError(response.data.error);
        } else {
          alert("Faturamento cadastrado com sucesso!");
        }
      } catch (error) {
        setError("Erro ao cadastrar novo faturamento. Por favor, tente novamente mais tarde.");
      }
    };

        return(
            <CorpoForm>
                <ItemForm>
                    <Titulo>{Form.titulo}</Titulo>
                    <Input 
                    type="number"
                    name="price"
                    value={price}
                    id="user"
                    placeholder="Informe o Valor"
                    required 
                    onChange={(e) => {setPrice(e.target.value),setError("")}}
                    style={{
                        alignItems:'center',
                        height: '10px'
                    }}
                    />
                    <Titulo>{Form.descricao}</Titulo>
                    <Input 
                    onChange={(e) => {setDescription  (e.target.value),setError("")}}
                    style={{height: '10px'}}
                    type="text"
                    name="description"
                    id="email"
                    placeholder="Informe a descrição"
                    required
                    />
                    <button onClick={handleCreate}
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
                    justifyContent:'center'
                  }}>Criar</button>
                </ItemForm>

                
            </CorpoForm>
        )
    }


export default FormularioRecipe