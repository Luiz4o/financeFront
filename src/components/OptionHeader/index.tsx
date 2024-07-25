import styled from 'styled-components'

const textOptions = ['Usuario', 'Receitas' , 'Despesas']

const Option = styled.ul`
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-width: 120px;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
`

const Options = styled.li`
    display: flex;
    align-items: center;
`


function OptionHeader() {
    return(
        <Options>
            {textOptions.map((text) => (
                <Option><p>{text}</p></Option>
          ))}
        </Options>
    )
}

export default OptionHeader