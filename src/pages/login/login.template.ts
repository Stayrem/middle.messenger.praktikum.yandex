export interface ILogin {
  login: string;
  password: string;
  loginError: string;
  passwordError: string;
  button: string;
  link: string;
}

export default ({
  login, password, button, link, loginError, passwordError,
}: ILogin) => `.auth
        .card
          h4(class='card__title') Вход
          form
            ${login}
            ${loginError}
            ${password}
            ${passwordError}
          div.auth__actions
            ${button}
            ${link}`;
