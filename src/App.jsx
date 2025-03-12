import { useState } from "react";
import "./App.css";

function App() {
  const [val, setVal] = useState("");
  const [items, setItems] = useState([]);
  const [num, setNum] = useState(1);

  const getValue = (e) => {
    setVal(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
   

    const newItem = {
      id: num,
      text: val,
    };

    setItems([...items, newItem]);
    setVal("");
    setNum(num + 1);
    console.log(num, val);
  };

  const deleteFun = (id) => {
    setItems(items.filter((i) => i.id !== id));
    console.log(1);
  };

  return (
    <>
      <div className="container hero-container">
        <form action="" className="hero-form" onSubmit={submit}>
          <input
            className="text-input"
            type="text"
            value={val}
            onChange={getValue}
          />
          <button className="add-btn" type="submit">
            Add
          </button>
        </form>

        <ul className="list">
          {items.map((item) => (
            <li key={item.id} className="item">
              <p>
                {item.text}
              </p>
              <i
                onClick={() => deleteFun(item.id)}
                className="fa-solid fa-trash trash"
                id="trash"
              ></i>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
