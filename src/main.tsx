import { createRoot } from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./components/ThemeContext";
import { FolderProvider } from "./components/FolderContext";
import "./styles.css";
import { StrictMode } from "react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <FolderProvider>
        <App />
      </FolderProvider>
    </ThemeProvider>
  </StrictMode>,
);
