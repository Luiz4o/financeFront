import styled from 'styled-components'
import LogoImage from '../../images/logo1.svg'

const LogoImg=styled.img`
    margin-right: 15px;
    width: 60px;
    display: flex;
`

const LogoContainer=styled.div`
    display: flex;
    font-size: 30px;
    align-items: center;

`

function Logo () {
    return (
    <LogoContainer>
        <LogoImg src={LogoImage} alt='logo' />
        <p><strong>Finances Personal</strong></p>
    </LogoContainer>

    )
}

export default Logo