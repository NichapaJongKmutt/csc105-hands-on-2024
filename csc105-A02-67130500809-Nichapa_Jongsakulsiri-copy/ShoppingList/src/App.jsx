import { useState } from "react";

import "./App.css";

function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) return;
    if (editIndex !== null) {
      const updateList = list.map((item, index) =>
        index === editIndex ? { ...item, text: input } : item
      );
      setList(updateList);
      setEditIndex(null);
    } else {
      setList([...list, { text: input, completed: false }]);
    }
    setInput("");
  };

  const remove = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

  const edit = (index) => {
    setInput(list[index].text);
    setEditIndex(index);
  };
  const toggleComplete = (index) => {
    setList(
      list.map((item, i) =>
        i === index ? { ...item, completed: !item.completed } : item
      )
    );
  };
  return (
    <>
      <div className="app-container">
        <div className="box">
          <h1>Shopping List</h1>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Add a new item"
              value={input}
              type="text"
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="form-add-up">
              {editIndex !== null ? "Update" : "Add"}
            </button>
          </form>
          <ul>
            {list.map((shopList, index) => (
              <li
                key={index}
                style={{
                  backgroundColor: shopList.completed
                    ? "rgb(214, 243, 223)"
                    : "rgb(239, 239, 239)",
                }}
              >
                <div
                  className="item-list"
                  onClick={() => toggleComplete(index)}
                  style={{
                    textDecoration: shopList.completed
                      ? "line-through"
                      : "none",
                  }}
                >
                  {shopList.text}
                </div>
                <div className="list-btn">
                  <button className="edit-btn" onClick={() => edit(index)}>
                    Edit
                  </button>
                  <button className="remove-btn" onClick={() => remove(index)}>
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
