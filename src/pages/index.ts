import { render } from 'pug';
import Block from '../utils/block';

const routesList = [
  {
    name: 'messenger',
    path: '/messenger',
  },
  {
    name: 'profile',
    path: '/profile',
  },
  {
    name: 'login',
    path: '/login',
  },
  {
    name: 'register',
    path: '/register',
  },
  {
    name: '404',
    path: '/404',
  },
  {
    name: '500',
    path: '/500',
  },
];

const baseTemplate = `div(class='routes')
    ul(class='routes__list')
      li(class='routes__list-item')
        a(class='routes__list-lnk' href="/messenger") messenger
      li(class='routes__list-item')
        a(class='routes__list-lnk' href="/profile") profile
      li(class='routes__list-item')
        a(class='routes__list-lnk' href="/login") login
      li(class='routes__list-item')
        a(class='routes__list-lnk' href="/register") register
      li(class='routes__list-item')
        a(class='routes__list-lnk' href="/404") 404
      li(class='routes__list-item')
        a(class='routes__list-lnk' href="/500") 500`;

export class IndexPage extends Block {
  render() {
    const template = render(baseTemplate, { routesList });
    return this.compile(() => template, {});
  }
}
