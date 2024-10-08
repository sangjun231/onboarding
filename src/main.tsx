import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import QueryProvider from "./QueryProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryProvider>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryProvider>
  </React.StrictMode>
);
