import Header from "@/components/Header";
import "../../globals.css";
import Content from "@/components/Content";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";

export default function Page() {
  return (
    <div className={`flex flex-col gap-4 p-4 h-screen `}>
      <Header title="My page" caption="I'm on the pages page!" />

      <div className="flex gap-4 flex-1">
        <Menu />
        <Content>
          <ul className="list-disc">
            <li>list 1</li>
            <li>list 2</li>
            <li>list 3</li>
            <li>list 4</li>
          </ul>
        </Content>
      </div>

      <Footer
        leftText="Made with ❤️ by saleh-coder"
        rightText={`Developed in ${new Date().getFullYear().toString()}`}
      />
    </div>
  );
}
