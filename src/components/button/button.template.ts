import { ButtonProps } from './Button';

export default (props: ButtonProps) => {
  const { label, type } = props;
  return `button(type=${type} class=button ${type})="${label}"`;
};
