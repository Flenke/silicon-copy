import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
const container = document.getElementById("root");
const root = createRoot(container);
export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
