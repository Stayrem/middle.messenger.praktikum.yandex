import { render } from 'pug';
import Block from '../../utils/block';
import template from './500.template';
import { Error } from '../../components/error/Error';

export class Error500 extends Block {
  init() {
    this.children.error = new Error({ title: '500', subtitle: 'unexpected error' });
  }

  render() {
    const templateWithStubs = render(template(this.props), {});
    return this.compile(() => templateWithStubs, {});
  }
}
