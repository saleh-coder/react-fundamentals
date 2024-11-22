interface ButtonsProps {
  alterName(name: string): void;
}

export default function Buttons(props: ButtonsProps) {
  return (
    <div className="flex gap-5">
      <button onClick={() => props.alterName("Marie")} className="button">
        Marie
      </button>
      <button onClick={() => props.alterName("Joseph")} className="button">
        Joseph
      </button>
      <button onClick={() => props.alterName("Paul")} className="button">
        Paul
      </button>
    </div>
  );
}
