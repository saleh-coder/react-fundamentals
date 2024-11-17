import Page from "@/components/Page";
import "../../app/globals.css";
import { useState } from "react";
import { IconMinus, IconPlus } from "@tabler/icons-react";

export default function DounterPage() {
  const [num, setNum] = useState(0);

  function dicrease() {
    setNum(num - 1);
  }

  function increase() {
    setNum(num + 1);
  }

  return (
    <Page title="Counter" caption="Counter Chapter">
      <div className="flex flex-col gap-5 justify-center items-center w-full h-full">
        <div className="text-7xl font-black">{num}</div>
        <div className="flex gap-5">
          <button onClick={dicrease} className="bg-blue-500 rounded-full p-2">
            <IconMinus size={30} />
          </button>
          <button onClick={increase} className="bg-blue-500 rounded-full p-2">
            <IconPlus size={30} />
          </button>
        </div>
      </div>
    </Page>
  );
}
