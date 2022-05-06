import { useState, useEffect } from "react";

export const DateTime = () => {
  const [dateTime, setDateTime] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return <h1>{dateTime.toLocaleString()}</h1>;
};
