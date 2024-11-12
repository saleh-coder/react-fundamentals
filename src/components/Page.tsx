import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import SideArea from "./SideArea";

export default function Page(props: any) {
  return (
    <div className={`flex h-screen`}>
      <SideArea />
      <div className="flex flex-col flex-1">
        <Header
          title={props.title}
          caption={props.caption}
          className="h-16 bg-zinc-800"
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
