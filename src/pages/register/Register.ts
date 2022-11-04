import { render } from 'pug';
import { Input } from '../../components/input/Input';
import template, { IRegister } from './register.template';
import Block from '../../utils/block';
import { Button } from '../../components/button';
import { Link } from '../../components/link';
import { validateInput } from '../../utils/validation';
import InputError from '../../components/input/InputError';

const validationInitialState = {
  email: true,
  login: true,
  firstName: true,
  lastName: true,
  phone: true,
  password: true,
} as const;

export class Register extends Block {
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
    this.children.email = new Input({
      name: 'email',
      type: 'text',
      placeholder: 'email',
      events: {
        blur: () => this.validate('email'),
        focus: () => this.validate('email'),
      },
    });
    this.children.firstName = new Input({
      name: 'firstName',
      type: 'text',
      placeholder: 'firstname',
      events: {
        blur: () => this.validate('firstName'),
        focus: () => this.validate('firstName'),
      },
    });
    this.children.lastName = new Input({
      name: 'lastName',
      type: 'text',
      placeholder: 'lastname',
      events: {
        blur: () => this.validate('lastName'),
        focus: () => this.validate('lastName'),
      },
    });
    this.children.phone = new Input({
      name: 'phone',
      type: 'text',
      placeholder: 'phone',
      events: {
        blur: () => this.validate('phone'),
        focus: () => this.validate('phone'),
      },
    });
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
      placeholder: 'password',
      events: {
        blur: () => this.validate('password'),
        focus: () => this.validate('password'),
      },
    });
    this.children.button = new Button({
      label: 'Sign up',
      events: {
        click: () => this.onSubmit(),
      },
    });
    this.children.link = new Link({
      title: 'Sign in',
      href: '/login',
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
    this.children.passwordCheckError = new InputError({
      errorText: '8-40 symbols. Must contain at least one uppercase letter',
      isValid: this.props.validationState.password,
    });
    this.children.emailError = new InputError({
      errorText: 'invalid email',
      isValid: this.props.validationState.email,
    });
    this.children.phoneError = new InputError({
      errorText: '10-15 symbols. Can start with "+"',
      isValid: this.props.validationState.phone,
    });
    this.children.firstNameError = new InputError({
      errorText: 'invalid firstname',
      isValid: this.props.validationState.firstName,
    });
    this.children.lastNameError = new InputError({
      errorText: 'invalid lastname',
      isValid: this.props.validationState.lastName,
    });
    const renderTmp = (props: IRegister) => render(template(props), {});
    return this.compile(renderTmp, {});
  }
}
