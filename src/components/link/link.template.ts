interface ILink {
  text: string;
  href: string;
  classname: string;
}

const linkTemplate = ({ text, href, classname = '' }: ILink) => `a(class="link ${classname}" href="${href}")="${text}"`;

export default linkTemplate;
