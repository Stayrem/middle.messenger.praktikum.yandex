import { render } from 'pug';
import template, { IChatInput } from './chatInput.template';
import Block from '../../../../utils/block';

export class ChatInput extends Block<IChatInput> {
  public getValue() {
    return (this.element as HTMLInputElement).value;
  }

  public getName() {
    return (this.element as HTMLInputElement).name;
  }

  render() {
    const renderTmp = () => render(template(this.props), {});
    return this.compile(renderTmp, {});
  }
}
