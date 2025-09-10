import GeneralPage from "./GeneralPage.jsx";
import PersonalPage from "./PersonalPage.jsx";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("general");

  return (
    <>
      {page === "general" && (
        <GeneralPage onSwitch={() => setPage("personal")} />
      )}
      {page === "personal" && (
        <PersonalPage onSwitch={() => setPage("general")} />
      )}
    </>
  );
}

export default App;
