import { useEffect } from "react";

// Barcelon Store: the project ships a static landing page (HTML/CSS/JS)
// located at /public/landing/. Redirect the React root to it so visitors
// land on the marketing page directly.
function App() {
  useEffect(() => {
    window.location.replace("/landing/index.html");
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        fontFamily: "Inter, system-ui, sans-serif",
        color: "#0F766E",
        background: "#F7FBFA",
      }}
    >
      <p>Loading Barcelon Store…</p>
    </div>
  );
}

export default App;
