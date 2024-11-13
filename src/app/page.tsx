import Page from "@/components/Page";
import { IconBrandReact } from "@tabler/icons-react";

export default function Home() {
  return (
    <Page title="React Fundamentals" caption="Welcome to React's world">
      <div
        className={`flex flex-col justify-center items-center
        h-full w-full text-zinc-500
        `}
      >
        <IconBrandReact size={200} stroke={1} />
        <span className="font-black">React fundamentals course</span>
        <span className="text-sm">
          Here you will learn solid fundamentals of the React library
        </span>
      </div>
    </Page>
  );
}
