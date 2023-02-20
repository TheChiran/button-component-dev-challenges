import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: 'default'
};

export const DefaultBtn = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DefaultBtn.args = {
  variant: 'default'
};

export const OutlineBtn = Template.bind({});

OutlineBtn.args = {
    variant: 'outline'
};

export const TextBtn = Template.bind({});
TextBtn.args = {
    variant: 'text'
};

export const DisabledWithDefaultVariant = Template.bind({});
DisabledWithDefaultVariant.args = {
    isDisabled: true
};

export const DisabledWithTextVariant = Template.bind({});
DisabledWithTextVariant.args = {
    isDisabled: true,
    variant: 'text'
};