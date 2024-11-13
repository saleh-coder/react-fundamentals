import { IconBrandReact } from "@tabler/icons-react";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="flex items-center px-5 font-black gap-2.5 h-16 bg-purple-700">
      <Link href="/">
        <IconBrandReact size={30} stroke={1} />
      </Link>
      <span className="text-2xl">React</span>
    </div>
  );
}
