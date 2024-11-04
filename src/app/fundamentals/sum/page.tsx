export default function Page() {
  const name = "John";
  const age = 40;
  return (
    <div>
      <div>Name:{name}</div>
      <div>Age:{age}</div>
      <div>{1 + 1}</div>
      <div>{Math.trunc(Math.random() * 6) + 1}</div>
    </div>
  );
}
