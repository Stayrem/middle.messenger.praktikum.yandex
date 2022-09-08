import { render } from 'pug';
import Block from '../../utils/block';
import baseTemplate, { ILogin } from './login.template';
import { Input } from '../../components/input';
import { Link } from '../../components/link';
import constants from './constants';

const { loginFields, actionsLinks } = constants;

class Login extends Block {
  constructor() {
    super(
      'div',
      {
        ...loginFields.reduce((acc, curr) => (
          {
            ...acc,
            [curr.name]: new Input({
              data: curr,
            }),
          }), {}),
        ...actionsLinks.reduce((acc, curr) => ({
          ...acc,
          [curr.name]: new Link({ data: curr }),
        }), {}),
      },

    );
  }

  render() {
    const renderTmp = (props: ILogin) => render(baseTemplate(props), {});
    return this.compile(renderTmp, {});
  }
}

export default Login;
