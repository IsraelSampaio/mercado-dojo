import React from 'react'

import ButtonStyled from './styles'

import Hoc from '../../helpers/hoc'

export interface ButtonProps {
    title?: string
}

const ButtonComponent: React.FC<ButtonProps> = ({ title }) => {
    return (
        <ButtonStyled>
            <ButtonStyled.Text>{title}</ButtonStyled.Text>
        </ButtonStyled>
    )
}

const Button: React.FC<ButtonProps> = props => (
    <Hoc Component={ButtonComponent} {...props} />
)

export { Button }
