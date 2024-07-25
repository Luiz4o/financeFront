import styled from "styled-components"
import { Titulo } from "../Titulo/Titulo"

const Card = styled.div`
    align-items: center;
    background-color: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    margin: 0 auto;
    max-width: 340px;
    padding: 25px 20px;
    justify-content: space-around;
    width: 100%;  
`

const Subtitulo = styled.h4`
    color: #002F52;
    font-size: 18px;
    font-weight: bold;
    margin: 15px 0;
`

const Img = styled.img`
    width: 65px;
`


interface ICard {
    titulo: string,
    subtitulo: string,
    descricao:string,
    img: string
}

function CardRecomenda(test:ICard) {
    const handleClickTrue = () => {
        localStorage.setItem('isCreate', 'true');
        window.location.reload(); // Recarrega a página para refletir a mudança
      };
    
      const handleClickFalse = () => {
        localStorage.setItem('isCreate', 'false');
        window.location.reload(); // Recarrega a página para refletir a mudança
      };

    return (
        <Card>
            <div>
                <Titulo tamanhoFonte="16px" cor="#186221" alinhamento="left">{test.titulo}</Titulo>
                <Subtitulo>{test.subtitulo}</Subtitulo>
                <button onClick={handleClickTrue}
                style={{
                    border: '1px solid #000',
                    background: 'transparent',
                    padding: '10px 10px',
                    borderRadius: '100px',
                    textAlign: 'center',
                    color: '#000',
                    fontSize: '16px',
                    marginBottom: '10px',
                    cursor: 'pointer',
                    width: '20vh',
                    display: 'inline-block',  // Usa inline-block para manter o texto em uma linha
                    whiteSpace: 'nowrap',  // Evita que o texto quebre para a próxima linha
                    textOverflow: 'ellipsis',
                  }}
                >Ver contas atuais
                </button>
                <button onClick={handleClickFalse}
                style={{
                    border: '1px solid #000',
                    background: 'transparent',
                    padding: '10px 10px',
                    borderRadius: '100px',
                    textAlign: 'center',
                    color: '#000',
                    fontSize: '16px',
                    marginBottom: '10px',
                    cursor: 'pointer',
                    width: '20vh',
                    display: 'inline-block',  // Usa inline-block para manter o texto em uma linha
                    whiteSpace: 'nowrap',  // Evita que o texto quebre para a próxima linha
                    textOverflow: 'ellipsis',
                  }}>Adicionar nova conta</button>
                

            </div>
            <div>
                <Img src={test.img}
                style={{width:'65px'}}/>
            </div>
        </Card>  
    )
}

export default CardRecomenda