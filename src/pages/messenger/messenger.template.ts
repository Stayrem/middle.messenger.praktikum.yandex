export interface IMessenger {
  header: string;
  chatList: string;
  chatWindow: string;
}

export default (props: IMessenger) => `div(class='messenger')
        div(class='sidebar')
            ${props.header}
            ${props.chatList}
        div(class='dialog')
            ${props.chatWindow}`;
