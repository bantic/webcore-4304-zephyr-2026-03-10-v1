import { useState } from "react";

export default () => {
  let [count, setCount] = useState(0);

  return (
    <>
      <div>Counter: Remote v2</div>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </>
  );
};
