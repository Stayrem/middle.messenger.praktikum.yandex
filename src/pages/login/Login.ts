import { render } from 'pug';
import Block from '../../utils/block';
import baseTemplate, { ILogin } from './login.template';
import { Input } from '../../components/input/Input';
import { Button } from '../../components/button';
import { validateInput } from '../../utils/validation';
import InputError from '../../components/input/InputError';
import { Link } from '../../components/link';

const validationInitialState = {
  login: true,
  password: true,
} as const;

export class Login extends Block {
  constructor() {
    super({
      validationState: { ...validationInitialState },
    });
    this.changeValidationState = this.changeValidationState.bind(this);
    this.validate = this.validate.bind(this);
  }

  changeValidationState(field: keyof typeof validationInitialState, isValid: boolean) {
    this.setProps({
      validationState: {
        ...this.props.validationState,
        [field]: isValid,
      },
    });
  }

  validate(field: keyof typeof validationInitialState) {
    const value = (this.children[field] as Input).getValue();
    const isValid = validateInput(value || '', field);
    this.changeValidationState(field, isValid);
  }

  init() {
    this.children.login = new Input({
      name: 'login',
      type: 'text',
      placeholder: 'Login',
      events: {
        blur: () => this.validate('login'),
        focus: () => this.validate('login'),
      },
    });
    this.children.password = new Input({
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      events: {
        blur: () => this.validate('password'),
        focus: () => this.validate('password'),
      },
    });
    this.children.button = new Button({
      label: 'Sign in',
      events: {
        click: () => this.onSubmit(),
      },
    });
    this.children.link = new Link({
      title: 'Sign up',
      href: '/register',
    });
  }

  onSubmit() {
    const fieldsComponents = Object.values(this.children).filter((it) => it instanceof Input);
    const fields = (fieldsComponents as Input[]).reduce((acc, curr) => (
      { ...acc, [curr.getName()]: curr.getValue() }
    ), {});
    const fieldNames = Object.keys(validationInitialState);
    fieldNames.forEach((it) => this.validate(it as keyof typeof validationInitialState));
    console.log(fields);
  }

  render() {
    this.children.loginError = new InputError({
      errorText: 'A-z, -, _ and spaces. 3-20 symbols. Can\'t contain only digits',
      isValid: this.props.validationState.login,
    });

    this.children.passwordError = new InputError({
      errorText: '8-40 symbols. Must contain at least one uppercase letter',
      isValid: this.props.validationState.password,
    });
    const renderTmp = (props: ILogin) => render(baseTemplate(props), {});
    return this.compile(renderTmp, {});
  }
}
