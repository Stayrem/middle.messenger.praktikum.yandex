import { IndexPage } from '../pages';
import { Login } from '../pages/login/Login';
import { Register } from '../pages/register/Register';
import { Messenger } from '../pages/messenger/Messenger';
import Profile from '../pages/profile/Profile';
import { Error500 } from '../pages/500/500';
import { Error404 } from '../pages/404/404';

type ITemplates = IndexPage;

const root = document.querySelector('#root')!;

const routes: Record<string, ITemplates> = {
  '/': new IndexPage({}),
  '/login': new Login(),
  '/register': new Register(),
  '/messenger': new Messenger({}),
  '/profile': new Profile({}),
  '/500': new Error500({}),
  '/404': new Error404({}),
};

const router = (path: string) => {
  if (routes[path]) {
    return root.append(routes[path].getContent()!);
  }
  return window.location.replace('/');
};

export default router;
