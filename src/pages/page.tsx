// Page created within the `pages` folder to demonstrate the routing system in Next.js
// Imports reusable components and global styles with Tailwind CSS support
import Header from "@/components/Header";
import "../app/globals.css";
import Content from "@/components/Content";
import Footer from "@/components/Footer";

// Main function for the `Page` component, defining the page structure and applying styles
export default function Page() {
  return (
    <div className={` flex flex-col h-screen p-5 gap-5 bg-black text-white `}>
      <Header title="My page" caption="I'm on the pages page!" />
      <Content />
      <Footer
        leftText="Made with ❤️ by saleh-coder"
        rightText={`Developed in ${new Date().getFullYear().toString()}`}
      />
    </div>
  );
}
