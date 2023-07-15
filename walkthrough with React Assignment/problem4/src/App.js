import "./App.css";
import List from "./List";
function App() {
  const items = ["item1", "item2", "item3", "item4", "item5"];
  return (
    <div className="App">
      <List items={items} />
    </div>
  );
}

export default App;
