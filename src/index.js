import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
let array = [1, 2, 3, 4, 5, 6, 7];
let string = "Steven Nguyen";
let boolean = false;

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
