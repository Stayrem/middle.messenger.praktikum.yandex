import { render } from 'pug';
import Block from '../../utils/block';
import template from './input.template';
import { IComponentProps } from '../../utils/types';

export interface IInput {
  title: string;
  name: string;
  placeholder: string;
  type: string;
}

class Input extends Block {
  constructor(props: IComponentProps) {
    super('div', props);
    this.props = props;
  }

  render() {
    const templateWithStubs = render(template(this.props.data), {});
    return this.compile(() => templateWithStubs, {});
  }
}

export default Input;
