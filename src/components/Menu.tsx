import { Icon360View, IconHome } from "@tabler/icons-react";
import MenuItem from "./MenuItem";

export default function Menu() {
  return (
    <div
      className={`
    flex flex-col justify-start items-center w-52
    text-3lx p-2 gap-2 text-white
    `}
    >
      <MenuItem icon={<IconHome />} text="Page #1" url="/fundamentals/page" />
      <MenuItem icon={<Icon360View />} text="Page #2" url="/page" />
    </div>
  );
}
