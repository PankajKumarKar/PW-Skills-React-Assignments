import "./Person.css";

function Person(props) {
  return (
    <div className="Person">
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}

export default Person;
