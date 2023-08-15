import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import "./index.css";
import { ContextProvider } from "./contexts/contextProvider.jsx";
import { registerLicense } from "@syncfusion/ej2-base";
registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1NGaF1cWGhBYVF0WmFZfV1gcV9FZlZUQGYuP1ZhSXxQdk1iXH9bc3JQQmNVUkU="
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
