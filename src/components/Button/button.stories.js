import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button
}

const Template = (args) => {
  return <Button {...args} />
}

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  primary: true,
  size: 'small',
  label: 'Button',
}