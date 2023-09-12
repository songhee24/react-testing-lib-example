import React, { useEffect } from "react";

function App() {
  const [data, setData] = React.useState(null);
  const [toggle, setToggle] = React.useState(false);
  const [value, setValue] = React.useState("");

  const toggleHandler = () => setToggle((prevState) => !prevState);
  const changeHandler = () => setToggle((prevState) => !prevState);

  useEffect(() => {
    setTimeout(() => {
      setData({});
    }, 500);
  }, []);

  return (
    <div>
      <h1 data-testid="value-elem">{value}</h1>
      {toggle === true && <div data-testid="toggle-elem">toggle</div>}
      {data && <div style={{ color: "red" }}>data</div>}
      <h1>Hello World</h1>
      <button data-testid="toggle-btn" onClick={toggleHandler}>
        click me
      </button>
      <input type="text" placeholder="input value..." />
    </div>
  );
}

export default App;
