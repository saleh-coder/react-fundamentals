import { useState } from "react";
import "../../app/globals.css";
import Page from "@/components/Page";

export default function StatefulPage() {
  const [number, setNumber] = useState(0);

  function increase() {
    setNumber(number + 1);
  }
  return (
    <Page title="Stateful Page" caption="Chapter State">
      <div className="flex flex-col">
        <div>
          <span>Value: </span>
          <span>{number}</span>
        </div>
        <button onClick={increase} className="bg-blue-500 p-2 rounded-lg">
          Increase
        </button>
      </div>
    </Page>
  );
}
