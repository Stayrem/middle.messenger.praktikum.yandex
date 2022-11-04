import { render } from 'pug';
import Block from '../../utils/block';
import template from './input.template';

export class Input extends Block {
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
