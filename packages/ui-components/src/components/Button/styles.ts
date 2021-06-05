import styled, { DefaultTheme, StyledComponentBase } from 'styled-components'

interface Button extends StyledComponentBase<any, DefaultTheme> {
    Text?: any
}

const ButtonStyled: Button = styled.button`
    outline: none;
    box-shadow: none;.
    cursor: pointer;

    border-style: ${props => props.theme.borderStyleSolid};
    border-width: ${props => props.theme.borderWidth0};

    background: ${props => props.theme.colorPrimary3};
    border-radius: ${props => props.theme.borderRadius1};
    padding: ${props => props.theme.paddingInsetSm};
`

ButtonStyled.Text = styled.p`
    margin: ${props => props.theme.marginStackNone};
    color: ${props => props.theme.colorPrincipalLight};
    font-weight: ${props => props.theme.fontWeightBold};
    font-family: ${props => props.theme.fontFamilyPrimary};
    font-size: ${props => props.theme.fontSizeXs};
    line-height: ${props => props.theme.fontSizeXs};
`

export default ButtonStyled
