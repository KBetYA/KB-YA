import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const portfolioUrl = "https://yonathan-andreu-films.yonathan-andreu.chatgpt.site";

function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <main className="site-shell">
      {!loaded && (
        <div className="loading" aria-live="polite">
          <div className="gold-mark">KB&amp;YA</div>
          <p>Chargement du portfolio…</p>
        </div>
      )}
      <iframe
        className={loaded ? "portfolio-frame loaded" : "portfolio-frame"}
        src={portfolioUrl}
        title="Portfolio vidéo KB&YA"
        allow="autoplay; fullscreen; picture-in-picture"
        onLoad={() => setLoaded(true)}
      />
      <noscript>
        <a href={portfolioUrl}>Ouvrir le portfolio KB&amp;YA</a>
      </noscript>
    </main>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode><App /></React.StrictMode>
);
