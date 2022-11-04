export interface IChatInput {
  isValid: boolean;
  value: string;
  events?: {
    blur: () => void;
  }
}

export default (props: IChatInput) => `input(value="${props.value}" class="chats-message__input ${props.isValid ? '' : 'chats-message__input--error'}"  placeholder="Сообщение")`;
