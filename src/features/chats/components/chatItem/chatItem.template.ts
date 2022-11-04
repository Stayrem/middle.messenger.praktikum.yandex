export interface IChatItem {
  avatarUrl: string;
  name: string;
  message: string;
  time: string;
}

export default (props: IChatItem) => `li(class='chat')
        a(class='chat__link')
          img(class='chat__avatar' src="${props.avatarUrl}" alt='avatar' width='47' height='47')
          div(class='chat__info')
            p(class='chat__name')='${props.name}'
            p(class='chat__message')='${props.message}'
            span(class='chat__time')='${props.time}'`;
