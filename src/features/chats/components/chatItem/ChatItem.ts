import { render } from 'pug';
import Block from '../../../../utils/block';
import template, { IChatItem } from './chatItem.template';

export class ChatItem extends Block<IChatItem> {
  render() {
    const renderTmp = () => render(template(this.props), {});
    return this.compile(renderTmp, {});
  }
}
