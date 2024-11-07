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
        h-36 rounded-lg text-xl px-10
        bg-cyan-600
    `}
    >
      <span>{leftText}</span>
      <span>{rightText}</span>
    </div>
  );
}
