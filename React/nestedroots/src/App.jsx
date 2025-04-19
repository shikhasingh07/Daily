import { useRef } from "react";
import "./App.css";
import NestedRoots from "./Components/NestedRoots";
import ReactHooksExamples from "./Components/ReactHooksExamples";

function App() {
  const ref = useRef();

  return (
    <>
      {/* <NestedRoots /> */}
      <button
        onClick={() => ref?.current?.reset()} // Call the reset method exposed by ReactHooksExamples
        style={{ margin: "5px", padding: "10px 20px" }}
      >
        Reset Counter
      </button>
      <ReactHooksExamples ref={ref} />
    </>
  );
}

export default App;