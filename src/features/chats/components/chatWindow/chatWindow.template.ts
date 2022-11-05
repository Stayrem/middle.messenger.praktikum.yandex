import attach from '../../../../static/icons/attach.svg';

export interface IChatWindow {
  messageInput?: string;
  sendButton?: string;
  name: string;
  isValid: boolean;
  message: string;
}

export default (props: IChatWindow) => `div(class='dialog')
    div(class="chat-window__header")
      img(class="chat-window__header-avatar" src="https://picsum.photos/34/34" alt="avatar" width="34" height="34")
      p(class="chat-window__header-name")='${props.name}'
    p(class='dialog__empty')
    div(class="chat-window__actions")
      button(class="chat-window__attach")
      img(alt="attach" src="${attach}")
      ${props.messageInput}
      ${props.sendButton}
`;
