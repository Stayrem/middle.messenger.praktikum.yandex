import { IInput } from './Input';

export default (props: IInput) => {
  const {
    title, name, placeholder, type,
  } = props;
  return `label(name="${name}" class="label")
        span(class='label__title') ${title}
        input(placeholder="${placeholder}" type="${type}" class="input")`;
};
