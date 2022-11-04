import { render } from 'pug';
import Block from '../../utils/block';
import template from './404.template';
import { Error } from '../../components/error/Error';

export class Error404 extends Block {
  init() {
    this.children.error = new Error({ title: '404', subtitle: 'not found' });
  }

  render() {
    const templateWithStubs = render(template(this.props), {});
    return this.compile(() => templateWithStubs, {});
  }
}
