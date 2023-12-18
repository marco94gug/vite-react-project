import "./index.css";

const Button = ({ text, color, setNewValue, number }) => {
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
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
};

export default Button;
