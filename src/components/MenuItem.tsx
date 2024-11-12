// Importing the Link component from Next.js for navigation
import Link from "next/link";

// Defining MenuItemProps interface to include 'text' and 'url' properties
interface MenuItemProps {
  text: string; // Text to display in the menu item
  url: string; // URL to navigate to when the menu item is clicked
  icon: any;
}

// The MenuItem component renders a link styled as a menu button
export default function MenuItem(props: MenuItemProps) {
  return (
    <Link
      href={props.url}
      className={`flex items-center gap-4 px-4 py-2 text-base w-full rounded-md hover:bg-zinc-900`}
    >
      <span>{props.icon}</span>
      <span>{props.text}</span>
    </Link>
  );
}
