export interface ILogin {
  login: string;
  password: string;
  loginError: string;
  passwordError: string;
  button: string;
  createAccount: string;
}

export default ({
  login, password, button, createAccount, loginError, passwordError,
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
            ${createAccount}`;
