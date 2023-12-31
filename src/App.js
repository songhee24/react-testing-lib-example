import React from "react";
import AppRouter from "./router/AppRouter";
import Navbar from "./components/Navbar";
// import Users from "./users/Users";

// function App() {
//   const [data, setData] = React.useState(null);
//   const [toggle, setToggle] = React.useState(false);
//   const [value, setValue] = React.useState("");
//
//   const toggleHandler = () => setToggle((prevState) => !prevState);
//   const changeHandler = (e) => setValue(e.target.value);
//
//   React.useEffect(() => {
//     setTimeout(() => {
//       setData({});
//     }, 500);
//   }, []);
//
//   return (
//     <div>
//       <h1 data-testid="value-elem">{value}</h1>
//       {toggle === true && <div data-testid="toggle-elem">toggle</div>}
//       {data && <div style={{ color: "red" }}>data</div>}
//       <h1>Hello World</h1>
//       <button data-testid="toggle-btn" onClick={toggleHandler}>
//         click me
//       </button>
//       <input
//         value={value}
//         onChange={changeHandler}
//         type="text"
//         placeholder="input value..."
//       />
//
//       <Users />
//     </div>
//   );
// }

const App = () => {
  return (
    <div>
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;
