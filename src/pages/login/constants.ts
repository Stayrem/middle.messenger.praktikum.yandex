export default {
  loginFields: [
    {
      title: 'Login', name: 'login', placeholder: 'john', type: 'text', errText: 'A-z, -, _ and spaces. 3-20 symbols. Can\'t contain only digits',
    },
    {
      title: 'Password', name: 'password', placeholder: '', type: 'password',
    },
  ],
  actionsLinks: [
    { name: 'auth', text: 'Auth', href: '#' },
    { name: 'createAccount', text: 'Create Account', href: '#' },
  ],
};
