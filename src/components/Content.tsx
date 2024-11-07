// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Content(props: any) {
  console.log(props);
  return (
    <h1
      className={`flex justify-center items-center flex-1
      bg-emerald-500
      text-3xl rounded-lg`}
    >
      {props.children}
    </h1>
  );
}
