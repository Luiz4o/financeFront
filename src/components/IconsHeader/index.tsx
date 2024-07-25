import home from '../../images/home.svg'
import settings from '../../images/settings.svg'
import styled from 'styled-components'

const Icons = styled.ul`
    display: flex;
    align-items: center;

`

const Icon = styled.li`
    margin-right: 50px;
    width: 20px;
    
`
const Img = styled.img`
    width: 35px;

`

const icons =[home, settings]

function IconsHeader() {
    return(
        <Icons>
        {icons.map((icon) => (
            <Icon><Img src={icon}></Img></Icon>))}
        </Icons>
    )

}

export default IconsHeader