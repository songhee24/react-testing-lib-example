import React, { useEffect } from "react";

function App() {
  const [data, setData] = React.useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData({});
    }, 500);
  }, []);

  return (
    <div>
      {data && <div style={{ color: "red" }}>data</div>}
      <h1>Hello World</h1>
      <button>click me</button>
      <input type="text" placeholder="input value..." />
    </div>
  );
}

export default App;
