import Header from "@/components/Header";
import "../../app/globals.css";
import Content from "@/components/Content";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className={`flex flex-col gap-4 p-4 h-screen `}>
      <Header title="My page" caption="I'm on the pages page!" />
      <Content />
      <Footer
        leftText="Made with ❤️ by saleh-coder"
        rightText={`Developed in ${new Date().getFullYear().toString()}`}
      />
    </div>
  );
}
