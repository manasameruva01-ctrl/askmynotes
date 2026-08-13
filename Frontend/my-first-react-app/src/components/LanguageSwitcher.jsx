import { useState } from "react";

function Language() {
  const [language, setLanguage] = useState("English");

  return (
    <div>
      <h1>Language Switcher</h1>

      <button onClick={() => setLanguage("English")}>
        English
      </button>

      <button onClick={() => setLanguage("Telugu")}>
        Telugu
      </button>

      <h2>
        {language === "English"
          ? "Welcome to React"
          : "రియాక్ట్‌కు స్వాగతం"}
      </h2>
    </div>
  );
}

export default Language;