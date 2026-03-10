import "./App.css";

import RemoteCounter from "remote/Counter";

function App() {
  return (
    <>
      <h1>Host App</h1>
      <div>Host V1</div>
      <RemoteCounter />
    </>
  );
}

export default App;
