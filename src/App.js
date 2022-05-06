import "./styles.css";
import { DateTime } from "./DateTime";

export default function App({ input }) {
  if (input) {
    return (
      <div className="App">
        <h1>Hi</h1>
      </div>
    );
  } else {
    return (
      <div className="App">
        <DateTime />
      </div>
    );
  }
}
