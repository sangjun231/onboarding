import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import QueryProvider from "./QueryProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryProvider>
      <ToastContainer
        className="mt-12"
        position="top-right"
        autoClose={1000}
        hideProgressBar={true}
      />
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryProvider>
  </React.StrictMode>
);
