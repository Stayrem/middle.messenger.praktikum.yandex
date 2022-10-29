import { render } from 'pug';
import Block from '../../utils/block';
import template from './button.template';
import { IComponentProps } from '../../utils/types';

export interface ButtonProps {
  label: string;
  events: {
    click: () => void;
  };
  type?: string;
}

export class Button extends Block<ButtonProps> {
  constructor(props: ButtonProps) {
    super({ type: 'button', ...props });
  }

  render() {
    const templateWithStubs = render(template(this.props), {});
    return this.compile(() => templateWithStubs, {});
  }
}

export default Button;
