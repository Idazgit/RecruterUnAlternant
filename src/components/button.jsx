import "../css/components/button.css";

export function Button({ value, className = "", onClick }) {
  return (
    <button onClick={onClick} className={`button ${className}`}>
      {value}
    </button>
  );
}
