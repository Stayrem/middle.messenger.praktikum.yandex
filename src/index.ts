// eslint-disable-next-line import/no-unresolved
import 'npm:normalize.css/normalize.css';
import router from './utils/router';
import './static/icons/arrow.svg';

window.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;
  router(path);
});
