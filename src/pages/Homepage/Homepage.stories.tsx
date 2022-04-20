import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Homepage } from './Homepage'

export default {
  title: 'Homepage',
  component: Homepage,
} as ComponentMeta<typeof Homepage>

export const HomepageStory: ComponentStory<typeof Homepage> = () => <Homepage />

HomepageStory.story = {
  parameters: {
    design: {
      type: 'figma',
      url: '',
    },
  },
}
