import { render } from 'pug';
import Block from '../../utils/block';
import template from './input.template';
import { IComponentProps } from '../../utils/types';
import { validateInput } from '../../utils/validation';

export interface IInput {
  name: string;
  type: string;
  placeholder: string;
  events?: {
    blur: (evt: InputEvent) => void;
  };
}

class Input extends Block {
  constructor(props: IInput) {
    super(props);
  }

  public getName() {
    return (this.element as HTMLInputElement).name;
  }

  public getValue() {
    return (this.element as HTMLInputElement).value;
  }

  render() {
    const templateWithStubs = render(template(this.props), {});
    return this.compile(() => templateWithStubs, {});
  }
}

export default Input;
