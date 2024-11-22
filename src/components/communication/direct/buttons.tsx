import { useState } from "react";
import Value from "./value";

export default function Buttons() {
  const [name, setName] = useState("");

  return (
    <div className="flex flex-col gap-5 bg-green-800 p-4 rounded-md m-2">
      <div className="flex gap-5">
        <button className="button" onClick={() => setName("Maria")}>
          Marie
        </button>
        <button className="button" onClick={() => setName("Joseph")}>
          Joseph
        </button>
        <button className="button" onClick={() => setName("Paul")}>
          Paul
        </button>
      </div>
      <Value text={name} />
    </div>
  );
}
