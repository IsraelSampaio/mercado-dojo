import React from 'react'

import Hoc from '../../helpers/hoc'

import { HeaderProps } from './Header.interface'

import HeaderStyles from './styles'

const HeaderComponent: React.FC<HeaderProps> = ({
    autocomplete = [],
    ...props
}) => {
    return (
        <HeaderStyles>
            <div className="container">
                <HeaderStyles.Wrapper>
                    <HeaderStyles.Image src={props.image} />
                </HeaderStyles.Wrapper>

                <HeaderStyles.Wrapper></HeaderStyles.Wrapper>

                <HeaderStyles.Wrapper></HeaderStyles.Wrapper>
            </div>
        </HeaderStyles>
    )
}

const Header: React.FC<HeaderProps> = props => (
    <Hoc Component={HeaderComponent} {...props} />
)

export { Header }
