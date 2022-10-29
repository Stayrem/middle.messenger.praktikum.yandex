import { IInput } from './Input';

export default (props: IInput) => {
  const {
    name, type, placeholder,
  } = props;
  return `input(placeholder="${placeholder}" name="${name}" type="${type}" class="input")`;
};
