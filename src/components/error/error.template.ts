export interface IError {
  title: string;
  subtitle: string;
}
export default (props: IError) => `div(class='error')
        p(class='error__title')= "${props.title}"
        p(class='error__subtitle')= "${props.subtitle}"
        a(class='error__link' href="/messages") back to chats`;
