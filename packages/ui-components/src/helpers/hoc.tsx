import React from 'react'

import { ThemeProvider } from 'styled-components'

import Theme from '../styles/theme'

interface HocProps {
    Component: any
}

const Hoc: React.FC<HocProps> = ({ Component, ...props }) => (
    <ThemeProvider theme={Theme}>
        <Component {...props} />
    </ThemeProvider>
)

export default Hoc
