import React from 'react'

import { Story, Meta } from '@storybook/react'

import { Header as HeaderComponent } from './'
import { HeaderProps } from './Header.interface'

const Template: Story<HeaderProps> = args => <HeaderComponent {...args} />

export const Header = Template.bind({})

export default {
    title: 'Header',
    component: Header
} as Meta

Header.args = {
    image:
        'https://http2.mlstatic.com/frontend-assets/ui-navigation/5.14.5/mercadolibre/logo-pt__large_plus.png'
}
