import ViewCount from "./components/viewCount";
import { useState } from "react";
import "./App.css";
import Button from "./components/button";

function App() {
  const [number, setNumber] = useState(0);

  return (
    <div className="wrapper">
      <h1>Hello World</h1>
      <section className="counter-section">
        <Button
          text="decrement"
          color="#BB6D6A"
          setNewValue={setNumber}
          number={number}
        />
        <ViewCount value={number} />
        <Button
          text="increment"
          color="#54945C"
          setNewValue={setNumber}
          number={number}
        />
      </section>
    </div>
  );
}

export default App;
