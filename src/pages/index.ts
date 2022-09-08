import { render } from 'pug';
import Block from '../utils/block';

const routesList = [
  {
    name: 'messenger',
    path: './messenger/messenger.pug',
  },
  {
    name: 'profile',
    path: './profile/profile.pug',
  },
  {
    name: 'login',
    path: '/login',
  },
  {
    name: 'register',
    path: './register',
  },
  {
    name: '404',
    path: './404/404.pug',
  },
  {
    name: '500',
    path: './500/500.pug',
  },
];

const baseTemplate = `div(class='routes')
    ul(class='routes__list')
        each  value in routesList
            li(class='routes__list-item')
                a(class='routes__list-lnk' href= value.path)= value.name`;

export class IndexPage extends Block {
  render() {
    const template = render(baseTemplate, { routesList });
    return this.compile(() => template, {});
  }
}
