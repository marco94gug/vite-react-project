import "./index.css";

const ViewCount = ({ value }) => {
  return (
    <div>
      <p className="text-content">
        {/* Qui stampo il valore di "value" prop passata da App.jsx */}
        Count: <span>{value}</span>
      </p>
    </div>
  );
};

export default ViewCount;
