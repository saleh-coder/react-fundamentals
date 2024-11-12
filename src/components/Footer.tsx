// Sets the type of the component's props
type FooterProps = {
  leftText: string; // The text that will appear on the left side
  rightText: string; // The text that will appear on the right side (in this case, the current year)
};

// Use the Footer Props type in the component
export default function Footer({ leftText, rightText }: FooterProps) {
  return (
    <div
      className={`
        flex justify-between items-center
        h-16 text-base px-10 bg-zinc-900
        border-t border-zinc-800 text-zinc-500
    `}
    >
      <span>{leftText}</span>
      <span>{rightText}</span>
    </div>
  );
}
