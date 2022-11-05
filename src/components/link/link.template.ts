export interface ILink {
  title: string;
  href: string;
  target?: string;
  classname?: string;
}
const linkTemplate = (props: ILink) => {
  const {
    title, href, classname = '', target = '_self',
  } = props;
  return `a(class="link ${classname}" target="${target}" href="${href}")="${title}"`;
};

export default linkTemplate;
