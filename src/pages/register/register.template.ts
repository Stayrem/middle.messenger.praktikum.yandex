export interface IRegister {
  email: string;
  login: string;
  firstName: string;
  secondName: string;
  phone: string;
  password: string;
  passwordCheck: string;
}

export default (props: IRegister) => `.auth
        .card
            h4(class='card__title') Регистрация
            ${props.email}
            ${props.login}
            ${props.firstName}
            ${props.secondName}
            ${props.phone}
            ${props.password}
            ${props.passwordCheck}
`;
