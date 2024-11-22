import { useState } from "react";
import Buttons from "./buttons";

export default function Value() {
  const [name, setName] = useState("Test");

  function alter(name: string) {
    setName(name);
  }

  return (
    <div className="flex flex-col gap-5">
      <span className="text-8xl font-black">{name}</span>
      <Buttons alterName={alter} />
    </div>
  );
}
