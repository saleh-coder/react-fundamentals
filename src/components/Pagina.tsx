import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";

export default function Page(props: any) {
  return (
    <div className={`flex flex-col gap-4 p-4 h-screen `}>
      <Header title={props.title} caption={props.caption} />

      <div className="flex gap-4 flex-1">
        <Menu />
        <Content>{props.children}</Content>
      </div>

      <Footer
        leftText="Made with ❤️ by saleh-coder"
        rightText={`Developed in ${new Date().getFullYear().toString()}`}
      />
    </div>
  );
}