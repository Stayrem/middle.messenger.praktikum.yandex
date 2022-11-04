export interface IChatsHeader {
  profileLink: string;
}
export default (props: IChatsHeader) => `div(class='chats-header')
    ${props.profileLink}
    div(class='chats-search')
        input(class='chats-search__input' placeholder='Поиск')`;
