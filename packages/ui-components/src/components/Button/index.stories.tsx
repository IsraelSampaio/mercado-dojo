import React from 'react'

import { Story, Meta } from '@storybook/react'

import { ButtonProps, Button as ButtonComponent } from './'

const Template: Story<ButtonProps> = args => <ButtonComponent {...args} />

export const Button = Template.bind({})

export default {
    title: 'Button',
    component: Button
} as Meta

Button.args = {
    title: 'Meu botão'
}
