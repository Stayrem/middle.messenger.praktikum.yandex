import { IndexPage } from '../pages';
import { Login } from '../pages/login';
import { Register } from '../pages/register';

type ITemplates = IndexPage;

const root = document.querySelector('#root')!;

const routes: Record<string, ITemplates> = {
  '/': new IndexPage(),
  '/login': new Login(),
  '/register': new Register(),
};

const router = (path: string) => {
  if (routes[path]) {
    return root.append(routes[path].getContent()!);
  }
  return window.location.replace('/');
};

export default router;
