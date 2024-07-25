import styled from "styled-components"

export const Titulo = styled.h2`
    color: ${props => props.cor || '#000'};
    font-size: ${props => props.tamanhoFonte || '18px;'};
    text-align: ${props => props.alinhamento || 'center'};
    width: 100%;
`