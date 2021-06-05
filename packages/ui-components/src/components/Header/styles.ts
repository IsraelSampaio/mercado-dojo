import styled, { DefaultTheme, StyledComponentBase } from 'styled-components'

interface IHeader extends StyledComponentBase<any, DefaultTheme> {
    Wrapper?: any
    Image?: any
}

const Header: IHeader = styled.header`
    background-color: ${props => props.theme.colorPrimary3};
    .container {
        max-width: 1200px;
        margin: 0 auto;
        height: 100px;
        padding: 0 24px;

        display: flex;
        align-items: center;
    }
`

Header.Wrapper = styled.div``

Header.Image = styled.img``

export default Header
