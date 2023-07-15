import "./Button.css";

function Button(props) {
  return (
    <div className="Button">
      <button onClick={props.onClick}>{props.text}</button>
    </div>
  );
}

export default Button;
