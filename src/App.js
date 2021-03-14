import React, { useState } from "react";
import DataTable from "react-data-table-component";
import "./styles.css";

export default function App() {
  const [prompt, setPrompt] = useState("");
  const handleClick = () => {
    const data = new FormData();
    data.append("prompt", prompt);
    fetch("https://burak.jotform.pro/API/gpt3/completion", {
      method: "post",
      body: data
    })
      .then((r) => r.json())
      .then((d) => console.log("resp:", d));
  };

  return (
    <div className="App">
      <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} />
      <br />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}
