import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";

export default function Page(props: any) {
  return (
    <div className={`flex gap-4 p-4 h-screen`}>
      <Menu />
      <div className="flex flex-col gap-4 flex-1">
        <Header
          title={props.title}
          caption={props.caption}
          className="h-24 bg-gradient-to-r from-blue-700 to-zinc-700"
        />
        <Content>{props.children}</Content>
        <Footer
          leftText="Made with ❤️ by saleh-coder"
          rightText={`Developed in ${new Date().getFullYear().toString()}`}
        />
      </div>
    </div>
  );
}
