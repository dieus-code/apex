import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
<<<<<<< HEAD

import App from "./App";
import "./index.css";

=======
import "./index.css";
import App from "./App";

>>>>>>> 2b00ab9a07ec856669c9344cf7452190452a43e9
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);