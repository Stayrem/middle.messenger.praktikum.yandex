import { render } from 'pug';
import Block from '../../../../utils/block';
import template, { IChatWindow } from './chatWindow.template';
import { Button } from '../../../../components/button';
import { ChatInput } from '../chatInput/ChatInput';
import { Input } from '../../../../components/input/Input';
import { validateInput } from '../../../../utils/validation';

export class ChatWindow extends Block<IChatWindow> {
  constructor() {
    super({
      isValid: true,
      name: 'John Doe',
      message: '',
    });
    this.onMessageChange = this.onMessageChange.bind(this);
    this.changeValidationState = this.changeValidationState.bind(this);
    this.validate = this.validate.bind(this);
  }

  onMessageChange(str: string) {
    this.setProps({ ...this.props, message: str });
    this.validate();
  }

  init() {
    this.children.sendButton = new Button({ label: 'send', events: { click: () => this.onSubmit() } });
  }

  changeValidationState(isValid: boolean) {
    this.setProps({ ...this.props, isValid });
  }

  validate() {
    const value = (this.children.messageInput as Input).getValue();
    const isValid = validateInput(value || '', 'message');
    this.changeValidationState(isValid);
  }

  onSubmit() {
    const message = (this.children.messageInput as ChatInput).getValue();
    console.log({ message });
    this.onMessageChange(message);
  }

  render() {
    this.children.messageInput = new ChatInput({
      isValid: this.props.isValid,
      value: this.props.message,
      events: {
        blur: () => this.onMessageChange((this.children.messageInput as ChatInput).getValue()),
      },
    });

    const renderTmp = (props: IChatWindow) => render(template({ ...props, ...this.props }), {});
    return this.compile(renderTmp, {});
  }
}
