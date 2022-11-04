import { render } from 'pug';
import Block from '../../utils/block';
import template, { IError } from './error.template';

export class Error extends Block<IError> {
  render() {
    const templateWithStubs = render(template(this.props), {});
    return this.compile(() => templateWithStubs, {});
  }
}
