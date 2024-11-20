import Page from "@/components/Page";
import { useState } from "react";

export default function InputTextPage() {
  const [value, setValue] = useState("");

  return (
    <Page
      title="Input Text Demo" 
      caption="managing Sate with Input Field">
      <input 
        type="text" 
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}/>
    </Page>
  );
}
