// Importing the Link component from Next.js for navigation
import Link from "next/link";

// Defining MenuItemProps interface to include 'text' and 'url' properties
interface MenuItemProps {
  text: string; // Text to display in the menu item
  url: string; // URL to navigate to when the menu item is clicked
}

// The MenuItem component renders a link styled as a menu button
export default function MenuItem(props: MenuItemProps) {
  return (
    <Link
      href={props.url}
      className={`px-4 py-2 bg-zinc-900 text-xl w-full rounded-md`}
    >
      {props.text} {/* Displaying the text passed as a prop */}
    </Link>
  );
}
