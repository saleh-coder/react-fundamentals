import MenuItem from "./MenuItem";

export default function Menu() {
  return (
    <div
      className={`
    flex flex-col justify-start items-center w-52
    bg-zinc-700 rounded-lg text-3lx p-2 gap-2 text-white
    `}
    >
      <MenuItem text="Page #1" url="/fundamentals/page" />
      <MenuItem text="Page #2" url="/page" />
    </div>
  );
}
