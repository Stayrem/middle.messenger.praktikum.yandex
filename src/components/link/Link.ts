import { render } from 'pug';
import Block from '../../utils/block';
import template, { ILink } from './link.template';

class Link extends Block<ILink> {
  render() {
    const templateWithStubs = render(template(this.props), {});
    return this.compile(() => templateWithStubs, {});
  }
}

export default Link;
