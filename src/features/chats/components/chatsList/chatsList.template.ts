export interface IChatList {
  chatItem: string;
}

export default (props: IChatList) => `
.chats
    ul(class='chats-list')
      ${props.chatItem}`;
