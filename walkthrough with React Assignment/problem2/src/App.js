import "./App.css";
import Button from "./Button";

function App() {
  function onClickHandler() {
    alert("Button Clicked");
  }
  return (
    <div className="App">
      <Button text="Click" onClick={onClickHandler} />
    </div>
  );
}

export default App;
