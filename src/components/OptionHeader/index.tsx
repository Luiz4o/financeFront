import styled from 'styled-components'
import { ExitButton } from '../ButtonExit'

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
          <ExitButton/>
        </Options>
        
    )
}

export default OptionHeader