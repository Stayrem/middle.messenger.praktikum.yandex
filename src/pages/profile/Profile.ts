import { render } from 'pug';
import Block from '../../utils/block';
import template, { IProfile } from './profile.template';
import { Link } from '../../components/link';

class Profile extends Block {
  init() {
    this.children.editLink = new Link({
      title: 'Edit',
      href: '#',
    });
    this.children.changePasswordLink = new Link({
      title: 'Change Password',
      href: '#',
    });
    this.children.logoutLink = new Link({
      title: 'Logout',
      href: '#',
    });
  }

  render() {
    const renderTmp = (props: IProfile) => render(template(props), {});
    return this.compile(renderTmp, {});
  }
}

export default Profile;
