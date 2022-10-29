import { render } from 'pug';
import Block from '../../utils/block';
import baseTemplate, { ILogin } from './login.template';
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import { validateInput } from '../../utils/validation';
import InputError from '../../components/input/InputError';

class Login extends Block {
  constructor() {
    super({
      validationState: {
        login: true,
        password: true,
      },
    });
    this.changeValidationState = this.changeValidationState.bind(this);
    this.validate = this.validate.bind(this);
  }

  changeValidationState(field: 'login' | 'password', isValid: boolean) {
    this.setProps({
      validationState: {
        ...this.props.validationState,
        [field]: isValid,
      },
    });
  }

  validate(field: 'login' | 'password') {
    const value = (this.children[field] as Input).getValue();
    const isValid = validateInput(value || '', 'login');
    this.changeValidationState(field, isValid);
  }

  init() {
    this.children.login = new Input({
      name: 'login',
      type: 'text',
      placeholder: 'Login',
      events: {
        blur: () => this.validate('login'),
      },
    });
    this.children.loginError = new InputError({
      errorText: 'A-z, -, _ and spaces. 3-20 symbols. Can\'t contain only digits',
      isValid: this.props.validationState.login,
    });
    this.children.password = new Input({
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      events: {
        blur: () => this.validate('password'),
      },
    });
    this.children.passwordError = new InputError({
      errorText: 'A-z, -, _ and spaces. 3-20 symbols. Can\'t contain only digits',
      isValid: this.props.validationState.password,
    });

    this.children.button = new Button({
      label: 'Войти',
      events: {
        click: () => this.onSubmit(),
      },
    });
  }

  onSubmit() {
    const fieldsComponents = Object.values(this.children).filter((it) => it instanceof Input);
    const fields = (fieldsComponents as Input[]).map((it) => ({ name: it.getName(), value: it.getValue() }));
  }

  render() {
    const renderTmp = (props: ILogin) => render(baseTemplate(props), {});
    return this.compile(renderTmp, {});
  }
}

export default Login;
