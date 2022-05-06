import "./styles.css";
import { DateTime } from "./DateTime";

export default function App({ input }) {
  if (Array.isArray(input)) {
    /* If the prop is an array, return a list of divs,
    each containing one element of the array. */
    return (
      <ul>
        {input.map((element) => (
          <li>
            <div>{element}</div>
          </li>
        ))}
      </ul>
    );
  } else if (input) {
    /* If the prop is anything else,
    return the value of the prop in a div */
    return <div>{input}</div>;
  } else {
    /* If the prop is a falsy value,
    return a live-updating date and time
    (update every second) in a div. */
    return (
      <div>
        <DateTime />
      </div>
    );
  }
}
