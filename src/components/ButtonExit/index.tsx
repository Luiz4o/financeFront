import styled from "styled-components"
import exit from '../../images/exit.svg'

export const ImageButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: inline-block;

  img {
    display: block; /* Remove o espaço abaixo da imagem */
    width: 45px;   /* Ajuste o tamanho conforme necessário */
    height: auto;   /* Mantém a proporção da imagem */
  }
`

export function ExitButton() {

    function handleExit(){
        localStorage.clear();
        window.location.reload();
    }

    return(
        <div>
        <ImageButton>
            <img src={exit} onClick={handleExit}></img>
        </ImageButton>

        </div>

    )
}