import React from "react";
import "./App.css";
import Video from "./Video";

function App() {
  return (
    <div className="app">
      {/** App container */}
      <div className="app__videos">
        <Video />
        <Video />
      </div>

      {/** Video List */}
    </div>
  );
}

export default App;
