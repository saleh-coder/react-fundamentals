import Page from "@/components/Page";
import { useState } from "react";

export default function InputCalc() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  return (
    <Page title="calculator" caption="Chapter State">
      <div className="flex flex-col gap-5">
        <div className="flex gap-5">
          <input
            type="number"
            value={number1}
            className="field"
            onChange={(e) => setNumber1(+e.target.value)}
          />
          <input
            type="number"
            value={number2}
            className="field"
            onChange={(e) => setNumber2(+e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <span>
            {number1} + {number2} = {number1 + number2}
          </span>
          <span>
            {number1} - {number2} = {number1 - number2}
          </span>
          <span>
            {number1} * {number2} = {number1 * number2}
          </span>
          <span>
            {number1} / {number2} = {number1 / number2}
          </span>
        </div>
      </div>
    </Page>
  );
}
