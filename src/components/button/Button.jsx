import "./index.css";

// la prop color ha come valore di default "grey", se non passi nessun valore a Button eg. <Button color="red" />
// il bottone avrà un backgroud-color grey
const Button = ({ text, bgColor = "grey", setNewValue, number }) => {
  const changeNumber = (val) => {
    if (val === "increment") {
      setNewValue(number + 1);

      // Alternative Version
      // prev === valore precedente di number definito in App.jsx
      // setNewValue((prev) => prev + 1);
      return;
    }

    setNewValue(number - 1);

    // Alternative Version
    // prev === valore precedente di number definito in App.jsx
    // setNewValue((prev) => prev - 1);
  };

  return (
    <button
      className="button"
      onClick={() => changeNumber(text)}
      // qui passo allo style inline il valore di color passato da App.jsx
      // Questo rende il colore del bottone dinamico
      style={{ backgroundColor: bgColor }}
    >
      {/* stampo il testo passato come prop da App.jsx */}
      {text}
    </button>
  );
};

export default Button;
