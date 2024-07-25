import CardRecomenda from "../Card";
import Criar from '../../images/create.svg'
import styled from "styled-components";


const SideBarContainer = styled.div`
  width: 400px;
  height: 1000px;
  position: fixed;
  top: 0;
  left: 0;
  color: white;
  padding-top: 50px; 
  z-index: 100; 
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3)

`

const CardSideBar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;

    p {
        width: 200px;
    }

    img {
        width: 100px;
    }

`


function SideBar() {
    return (<SideBarContainer>
        <CardSideBar >
            <CardRecomenda
            titulo="Crie aqui uma nova caixinha de organização"
            subtitulo="Crie aqui suas despesas/receitas"
            descricao="Construindo uma aplicação com a plataforma Google"
            img={Criar}

            />
        </CardSideBar>
    </SideBarContainer>
)}

export default SideBar