import "./index.css";

const ViewCount = ({ value }) => {
  return (
    <div>
      <p className="text-content">
        Count: <span>{value}</span>
      </p>
    </div>
  );
};

export default ViewCount;
