import { IoClose } from "react-icons/io5";
import "../css/components/modal.css";

export default function Modal({ title, onClose, children }) {
  return (
    <div className="bg-modal" onClick={onClose}>
      <div className="container-modal" onClick={(e) => e.stopPropagation()}>
        <div className="title-modal">
          {title}
          <button className="close-btn" onClick={onClose}>
            <IoClose />
          </button>
        </div>
        <div className="text-modal">{children}</div>
      </div>
    </div>
  );
}
