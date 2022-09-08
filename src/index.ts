import 'npm:normalize.css/normalize.css';
import router from './utils/router';

window.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;
  router(path);
});
