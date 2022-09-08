export interface ILogin {
  login: string;
  password: string;
  auth: string;
  createAccount: string;
}

export default ({
  login, password, auth, createAccount,
}: ILogin) => `.auth
        .card
          h4(class='card__title') Вход
          ${login}
          ${password}
          div.auth__actions
            ${auth}
            ${createAccount}`;
