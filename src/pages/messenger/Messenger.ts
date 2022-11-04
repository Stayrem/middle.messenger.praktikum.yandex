import { render } from 'pug';

import Block from '../../utils/block';
import { ChatsHeader } from '../../features/chats/components/chatsHeader/ChatsHeader';
import { ChatList } from '../../features/chats/components/chatsList/ChatsList';
import template, { IMessenger } from './messenger.template';
import { ChatWindow } from '../../features/chats/components/chatWindow/chatWindow';

export class Messenger extends Block {
  init() {
    this.children.header = new ChatsHeader({});
    this.children.chatList = new ChatList({});
    this.children.chatWindow = new ChatWindow();
  }

  render() {
    const renderTmp = (props: IMessenger) => render(template(props), {});
    return this.compile(renderTmp, {});
  }
}
