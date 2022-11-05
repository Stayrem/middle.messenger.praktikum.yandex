import { render } from 'pug';
import Block from '../../../../utils/block';
import { Link } from '../../../../components/link';
import template, { IChatsHeader } from './chatsHeader.template';

export class ChatsHeader extends Block {
  init() {
    this.children.profileLink = new Link({
      title: 'Profile',
      href: '#',
      classname: 'chats-header__link',
    });
  }

  render() {
    const renderTmp = (props: IChatsHeader) => render(template(props), {});
    return this.compile(renderTmp, {});
  }
}
