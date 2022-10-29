import { render } from 'pug';
import Block from '../../utils/block';
import template from './inputError.template';

export interface IInputError {
  errorText: string,
  isValid: boolean,
}

class InputError extends Block {
  constructor(props: IInputError) {
    super(props);
  }

  render() {
    const templateWithStubs = render(template(this.props), {});
    return this.compile(() => templateWithStubs, {});
  }
}

export default InputError;
