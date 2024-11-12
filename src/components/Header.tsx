// Definition of the HeaderProps interface that specifies the types of the properties received by the Header component. This avoids the use of the 'any' type, improving type safety and code readability.
interface HeaderProps {
  title: string;
  caption: string;
  className?: string; // Optional className property
}

export default function Header(props: HeaderProps) {
  console.log(props);
  return (
    <div
      className={`
    flex flex-col justify-center items-center
  bg-purple-500 rounded-lg  ${props.className ?? ""}`}
    >
      <h1 className="text-3xl font-black">{props.title}</h1>
      <h2>{props.caption}</h2>
    </div>
  );
}
