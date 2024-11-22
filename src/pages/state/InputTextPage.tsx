import Page from "@/components/Page";
import { useState } from "react";

export default function InputTextPage() {
  const [value, setValue] = useState("Initial");

  function alter() {
    setValue("Marie");
  }

  return (
    <Page title="Input Text Demo" caption="managing Sate with Input Field">
      <div className="flex flex-col items-start gap-5">
        <input
          type="text"
          className="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="button" onClick={alter}>
          To alter
        </button>
        <span>{value}</span>
      </div>
    </Page>
  );
}
