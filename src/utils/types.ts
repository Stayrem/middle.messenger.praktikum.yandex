interface IChild {
  name: string;
  node: HTMLElement;
}

export interface IComponentProps<T extends string | number | symbol> {
  children?: {};
  child?: IChild | HTMLElement | string;
  // eslint-disable-next-line no-unused-vars
  events?: Record<string, (() => void)[]>;
  data: Record<T, any>
}
