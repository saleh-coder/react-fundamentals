// Definition of the HeaderProps interface that specifies the types of the properties received by the Header component. This avoids the use of the 'any' type, improving type safety and code readability.
interface HeaderProps {
  title: string;
  caption: string;
}

export default function Header(props: HeaderProps) {
  console.log(props);
  return (
    <div
      className={`
    flex flex-col justify-center items-center h-24
  bg-purple-500 rounded-lg `}
    >
      <h1 className="text-3xl font-black">{props.title}</h1>
      <h2>{props.caption}</h2>
    </div>
  );
}
