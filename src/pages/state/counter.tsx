import Page from "@/components/Page";
import { useState } from "react";
import { IconMinus, IconPlus } from "@tabler/icons-react";

export default function DounterPage() {
  const [num, setNum] = useState(0);
  const [delta, setDelta] = useState(1);

  function deltaDicrease() {
    setDelta(delta - 1);
  }

  function deltaIncrease() {
    setDelta(delta + 1);
  }

  function dicrease() {
    setNum(num - delta);
  }

  function increase() {
    setNum(num + delta);
  }

  return (
    <Page title="Counter" caption="Counter Chapter">
      <div className="flex flex-col gap-5 justify-center items-center w-full h-full">
        <div className="text-7xl font-black">{num}</div>
        <div className="flex gap-5">
          <button onClick={dicrease} className="bg-blue-500 rounded-full p-4">
            <IconMinus size={30} />
          </button>
          <button onClick={increase} className="bg-blue-700 rounded-full p-4">
            <IconPlus size={30} />
          </button>
        </div>
        <div className="flex gap-4">
          <button
            onClick={deltaDicrease}
            className="flex justify-center items-center bg-purple-500 rounded-full w-9 h-9"
          >
            <IconMinus size={16} />
          </button>
          <span>{delta}</span>
          <button
            onClick={deltaIncrease}
            className="flex justify-center items-center bg-purple-700 rounded-full w-9 h-9"
          >
            <IconPlus size={16} />
          </button>
        </div>
      </div>
    </Page>
  );
}
