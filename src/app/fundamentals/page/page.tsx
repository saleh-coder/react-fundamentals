import Content from "@/components/Content";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Page() {
  return (
    <div className={`flex flex-col gap-4 p-4 h-screen`}>
      <Header title="My application" caption="Best app on the web!" />
      <Content />
      <Footer />
    </div>
  );
}
