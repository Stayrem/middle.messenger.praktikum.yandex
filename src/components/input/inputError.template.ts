export default (props: { isValid: boolean; errorText: string }) => {
  const {
    isValid, errorText,
  } = props;
  return `span(class="input-err ${isValid ? 'v-hidden' : ''}")="${errorText}"`;
};
