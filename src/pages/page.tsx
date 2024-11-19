import Page from "@/components/Page";

// Main function for the `Page` component, defining the page structure and applying styles
export default function TestPage() {
  function execute() {
    console.log("The button was pressed");
  }

  return (
    <Page title="My App" caption="I'm on the pages page!">
      <button onClick={execute} className="button">
        test
      </button>
    </Page>
  );
}
