interface IButtonProps {
  type: "submit" | "reset" | undefined | "button";
  text: string;
}
function Button({ type, text }: IButtonProps) {
  return (
    <button className="button" type={type}>
      {text}
    </button>
  );
}

export default Button;
