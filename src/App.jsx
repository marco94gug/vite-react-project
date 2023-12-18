import ViewCount from "./components/viewCount";
import { useState } from "react";
import "./App.css";
import Button from "./components/button";

function App() {
  // Definisco useState per number
  const [number, setNumber] = useState(0);

  return (
    <div className="wrapper">
      <h1>Hello World</h1>
      <section className="counter-section">
        <Button
          // Assegno il testo che voglio visualizzare sul button tramite la prop text
          text="decrement"
          // Cambio il colore al button tramite la prop color
          bgColor="#BB6D6A"
          // Passo il metodo setNumber di useState per poter mutare number da Button.jsx
          setNewValue={setNumber}
          number={number}
        />
        <ViewCount value={number} />
        <Button
          text="increment"
          bgColor="#54945C"
          setNewValue={setNumber}
          number={number}
        />
      </section>
    </div>
  );
}

export default App;
