import GeneralPage from "./GeneralPage.jsx";
import PersonalPage from "./PersonalPage.jsx";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("personal");

  return (
    <>
      {page === "personal" && (
        <PersonalPage onSwitch={() => setPage("general")} />
      )}
      {page === "general" && (
        <GeneralPage onSwitch={() => setPage("personal")} />
      )}
    </>
  );
}

export default App;
