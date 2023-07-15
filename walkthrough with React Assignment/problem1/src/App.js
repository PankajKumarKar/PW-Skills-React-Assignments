import "./App.css";
import Person from "./Person";

function App() {
  const person = {
    name: "Pankaj",
    age: 27,
  };
  return (
    <div className="App">
      <Person name={person.name} age={person.age} />
    </div>
  );
}

export default App;
