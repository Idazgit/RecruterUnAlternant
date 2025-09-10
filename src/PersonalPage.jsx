import "./css/index.css";
import { Button } from "./components/button.jsx";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import Threads from "./components/Threads.jsx";
import { useState } from "react";
import { MODALSPERSO } from "./modalConfigPerso.jsx";
import Modal from "./components/Modal.jsx";

export default function PersonalPage({ onSwitch }) {
  const [openModal, setOpenModal] = useState(null);

  const BUTTONS = [
    {
      id: "objectives",
      className: "btn-perso objectives",
    },
    {
      id: "values",
      className: "btn-perso values",
    },
    { id: "projects", className: "btn-perso projects" },
    {
      id: "sport",
      className: "btn-perso sport",
    },
    {
      id: "Cv",
      className: "btn-perso Cv",
    },
    {
      id: "contact",
      className: "btn-perso contact",
    },
  ];
  return (
    <div className="page perso">
      <Threads
        amplitude={1.3}
        distance={0.4}
        enableMouseInteraction={false}
        color={[0.639, 0.345, 0.161]}
      />
      <header>
        <Button
          onClick={onSwitch}
          value={"Besoin d'un Alternant 🎓"}
          className="btn-perso study"
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
            <p>
              {" "}
              Apprenez à{" "}
              <h1 className="title-perso">
                Me <span className="title-perso-last">connaître</span>{" "}
              </h1>{" "}
            </p>
          </div>
          <a
            href="https://www.linkedin.com/in/tristan-couteux-a79a23349//"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="btn-perso portfolio" value={"Portfolio 💻"} />
          </a>
          {BUTTONS.map(({ id, className }) => (
            <Button
              key={id}
              className={className}
              value={MODALSPERSO[id].title}
              onClick={() => setOpenModal(id)}
            />
          ))}
          {openModal && (
            <Modal
              title={MODALSPERSO[openModal].title}
              onClose={() => setOpenModal(null)}
            >
              {MODALSPERSO[openModal].content}
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
}
