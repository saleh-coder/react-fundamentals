interface ValueProps {
  text: string;
}

export default function Value(props: ValueProps) {
  return (
    <div className="bg-yellow-800 p-4 rounded-md text-8xl font-black">
      {props.text}
    </div>
  );
}
