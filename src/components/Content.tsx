interface ContentProps {
  children: any;
}

export default function Content(props: ContentProps) {
  console.log(props);
  return (
    <h1
      className={`flex items-start flex-1 p-4
      bg-zinc-900
      text-3xl `}
    >
      {props.children}
    </h1>
  );
}
