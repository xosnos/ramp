import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
let array = [5, 4, 3, 2, 1];
let string = "Hello Ramp, I'm Steven Nguyen";
let boolean = false;

root.render(
  <StrictMode>
    <App input={array} />
    <hr />
    <App input={string} />
    <hr />
    <App input={boolean} />
  </StrictMode>
);
