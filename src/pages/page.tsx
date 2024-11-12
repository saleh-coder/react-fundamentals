// Page created within the `pages` folder to demonstrate the routing system in Next.js
// Imports reusable components and global styles with Tailwind CSS support
import "../app/globals.css";
import Page from "@/components/Page";

// Main function for the `Page` component, defining the page structure and applying styles
export default function TestPage() {
  function execute() {
    console.log("The button was pressed");
  }

  return (
    <Page title="My App" caption="I'm on the pages page!">
      <button onClick={execute} className="bg-blue-500 p-2 rounded-md">
        test
      </button>
    </Page>
  );
}
