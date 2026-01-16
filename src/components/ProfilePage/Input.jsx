const Input = (props) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.func}
      className="w-full px-4 py-3 rounded-lg border"
    />
  );
};

export default Input;
