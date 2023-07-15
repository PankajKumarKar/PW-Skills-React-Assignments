import "./List.css";

function List({ items }) {
  return (
    <div className="List">
      List:
      <ul>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
