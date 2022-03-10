import { Meta, Story } from '@storybook/react'

import ExampleComponent from '.'

export default {
  title: 'Boilerplate Vite',
  component: ExampleComponent
} as Meta

export const Basic: Story = (args) => <ExampleComponent {...args} />
