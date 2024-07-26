import IconsHeader from "../IconsHeader";
import Logo from "../Logo";
import OptionHeader from "../OptionHeader";
import styled from "styled-components";


const HeaderContainer = styled.header`
    background-image: linear-gradient(90deg,rgb(116, 221, 177) 35%, rgb(17, 196, 202));
    height: 110px;
    display: flex;
    text-align: center
    align-items: center;
    justify-content: center;
`
function Header() {
    return(
        <HeaderContainer>
            <Logo />
            <OptionHeader/>
            <IconsHeader/>
        </HeaderContainer>
    )
}

export default Header