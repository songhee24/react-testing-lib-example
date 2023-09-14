import React from "react";

const HelloWorld = () => {
  const [value, setValue] = React.useState("");
  const [visible, setVisible] = React.useState(false);

  const toggle = () => value === "hello" && setVisible((prev) => !prev);
  const onChange = (e) => setValue(e.target.value);

  return (
    <div>
      <input onChange={onChange} id="search" type="text" />
      <button onClick={toggle} id="toggle">
        HELLO WORLD
      </button>
      {visible && <h1 id="hello">HELLO WORLD</h1>}
    </div>
  );
};

export default HelloWorld;
