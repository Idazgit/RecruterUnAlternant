import "./css/index.css";
import { useState } from "react";
import { Button } from "./components/button.jsx";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import Threads from "./components/Threads.jsx";
import Modal from "./components/Modal.jsx";
import { MODALS } from "./modalConfig.jsx";

export default function GeneralPage({ onSwitch }) {
  const [openModal, setOpenModal] = useState(null);

  const BUTTONS = [
    {
      id: "regard",
      className: "btn-general regard",
    },
    {
      id: "etat",
      className: "btn-general etat",
    },
    {
      id: "capacity",
      className: "btn-general capacity",
    },
    { id: "employer", className: "btn-general employer" },
    {
      id: "transmission",
      className: "btn-general transmission",
    },
    {
      id: "mastered",
      className: "btn-general mastered",
    },
  ];

  return (
    <div className="page general">
      <Threads
        amplitude={1.3}
        distance={0.4}
        enableMouseInteraction={false}
        color={[0.0627, 0.302, 0.529]}
      />
      <header>
        <Button
          onClick={onSwitch}
          value={"Pourquoi moi ? 🙋‍♂️"}
          className="btn-general why-me"
        />
        <div className="social">
          <a
            href="https://www.linkedin.com/in/tristan-couteux-a79a23349/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="FaLinkedin" />
          </a>
          <a
            href="https://github.com/Idazgit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare className="FaGithubSquare" />
          </a>
        </div>
      </header>
      <div className="main">
        <div className="stage">
          <div className="title">
            <p>Pourquoi vous avez besoin d'un </p>
            <h1 className="title-general">Alternant</h1>
          </div>
          {BUTTONS.map(({ id, className }) => (
            <Button
              key={id}
              className={className}
              value={MODALS[id].title}
              onClick={() => setOpenModal(id)}
            />
          ))}
          {openModal && (
            <Modal
              title={MODALS[openModal].title}
              onClose={() => setOpenModal(null)}
            >
              {MODALS[openModal].content}
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
}
