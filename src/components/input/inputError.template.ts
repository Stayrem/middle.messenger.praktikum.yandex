export default (props: { isValid: boolean; errorText: string }) => {
  console.log(props);
  const {
    isValid, errorText,
  } = props;
  return `span(class="input-err ${isValid ? 'hidden' : ''}")="${errorText}"`;
};
