/* eslint-disable react/jsx-key */

import FixedElement from './FixedElement';

export default {
  title: 'FixedElement',
  parameters: { component: FixedElement },
};

const Template = (args) => {
  return <FixedElement {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  background: 'blue',
  left: '0px',
};

export const Secondary = Template.bind({});
Secondary.args = {
  background: 'red',
  left: '200px',
};
