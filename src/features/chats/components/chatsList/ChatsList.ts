import { render } from 'pug';
import Block from '../../../../utils/block';
import template, { IChatList } from './chatsList.template';
import { ChatItem } from '../chatItem/ChatItem';

export class ChatList extends Block {
  init() {
    this.children.chatItem = new ChatItem({
      name: 'John',
      message: 'Lorem',
      avatarUrl: 'https://picsum.photos/48/48',
      time: '02.05.2022',
    });
  }

  render() {
    const renderTmp = (props: IChatList) => render(template(props), {});
    return this.compile(renderTmp, {});
  }
}
