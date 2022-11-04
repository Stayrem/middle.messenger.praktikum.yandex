export interface IRegister {
  email: string;
  login: string;
  firstName: string;
  lastName: string;
  phone: string;
  password: string;
  passwordCheck: string;
  emailError: string;
  loginError: string;
  firstNameError: string;
  lastNameError: string;
  phoneError: string;
  passwordError: string;
  passwordCheckError: string;
  button: string;
  link: string;
}

export default (props: IRegister) => `.auth
        .card
            h4(class='card__title') Регистрация
            ${props.email}
            ${props.emailError}
            ${props.login}
            ${props.loginError}
            ${props.firstName}
            ${props.firstNameError}
            ${props.lastName}
            ${props.lastNameError}
            ${props.phone}
            ${props.phoneError}
            ${props.password}
            ${props.passwordError}
            ${props.passwordCheck}
            ${props.passwordCheckError}
            div.auth__actions
              ${props.button}
              ${props.link}
`;
