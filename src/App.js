import { useEffect } from "react";
import Layout from "./Layout";

function App() {
  useEffect(() => {
    document.body.style.background = "rgb(33, 34, 64)";
    document.body.style.margin = "0px";
    document.body.style.padding = "0px";
  });
  return (
    <div className="text-white">
      <Layout />
    </div>
  );
}

export default App;
