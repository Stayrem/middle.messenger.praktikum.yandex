interface IInput {
  name: string;
  type: string;
  placeholder: string;
  events?: {
    blur: (evt: InputEvent) => void;
  };
}
export default (props: IInput) => {
  const {
    name, type, placeholder,
  } = props;
  return `input(placeholder="${placeholder}" name="${name}" type="${type}" class="input")`;
};
