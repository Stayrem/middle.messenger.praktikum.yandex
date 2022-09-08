import { render } from 'pug';
import { Input } from '../../components/input';
import template, { IRegister } from './register.template';
import constants from './constants';
import Block from '../../utils/block';

const { registerFields } = constants;

class Register extends Block {
  constructor() {
    super(
      'div',
      {
        ...registerFields.reduce((acc, curr) => (
          {
            ...acc,
            [curr.stubId]: new Input({
              data: curr,
            }),
          }), {}),
      },
    );
  }

  render() {
    const renderTmp = (props: IRegister) => render(template(props), {});
    return this.compile(renderTmp, {});
  }
}

export default Register;
