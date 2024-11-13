import "../../app/globals.css";
import Page from "@/components/Page";

export default function StatelessPage() {
  let number = 0;

  function increase() {
    number += 1;
    console.log(number);
  }
  return (
    <Page title="Stateless Page" caption="Chapter State">
      <div className="fles flex-col">
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
