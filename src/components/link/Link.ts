import { render } from 'pug';
import Block from '../../utils/block';
import { IComponentProps } from '../../utils/types';
import template from './link.template';

class Link extends Block {
  constructor(props: IComponentProps) {
    super('div', props);
    this.props = props;
  }

  render() {
    const templateWithStubs = render(template(this.props.data), {});
    return this.compile(() => templateWithStubs, {});
  }
}

export default Link;
