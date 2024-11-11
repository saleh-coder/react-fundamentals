import Pagina from "@/components/Page";
import "../../globals.css";

export default function Page() {
  return (
    <Pagina title="My Application" caption="I'm on the fundamentals page">
      <ul className="list-disc pl-8">
        <li>list 1</li>
        <li>list 2</li>
        <li>list 3</li>
        <li>list 4</li>
      </ul>
    </Pagina>
  );
}
