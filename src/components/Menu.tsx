import {
  IconArrowDownSquare,
  IconBraces,
  IconBrandJavascript,
  IconCalculator,
  IconCode,
  IconFileCheck,
  IconForms,
  IconFunction,
  IconH1,
  IconNumbers,
  IconSitemap,
} from "@tabler/icons-react";
import MenuItem from "./MenuItem";

export default function Menu() {
  return (
    <div
      className={`
     flex flex-col justify-start w-72
     text-3lx p-2 gap-2
    `}
    >
      <span className="text-sm text-zinc-500 pl-3 pt-4">Communication</span>

      <MenuItem
        icon={<IconArrowDownSquare />}
        text="Direct Communication"
        url="/communication/direct"
      />

      <span className="text-sm text-zinc-500 pl-3 pt-4">State</span>

      <MenuItem
        icon={<IconCode />}
        text="Stateless Component"
        url="/state/stateless"
      />
      <MenuItem
        icon={<IconCode />}
        text="Stateful Component"
        url="/state/stateful"
      />

      <MenuItem icon={<IconNumbers />} text="Couter" url="/state/counter" />

      <MenuItem
        icon={<IconForms />}
        text="Input Text Demo"
        url="/state/InputTextPage"
      />

      <MenuItem
        icon={<IconCalculator />}
        text="Calculater"
        url="/state/InputCalc"
      />

      <span className="text-sm text-zinc-500 pl-3 pt-4">Fundamentals</span>
      <MenuItem
        icon={<IconBraces />}
        text="JSX with JS"
        url="/fundamentals/sum"
      />
      <MenuItem
        icon={<IconFunction />}
        text="JSX: Calling functions"
        url="/fundamentals/functions"
      />
      <MenuItem
        icon={<IconFileCheck />}
        text="Page #1"
        url="/fundamentals/page"
      />
      <MenuItem icon={<IconSitemap />} text="Page #2" url="/page" />

      <span className="text-sm text-zinc-500 pl-3 pt-4">Components</span>
      <MenuItem
        icon={<IconCode />}
        text="Basic Component"
        url="/component/basic"
      />
      <MenuItem
        icon={<IconH1 />}
        text="Title Component"
        url="/component/title"
      />
      <MenuItem
        icon={<IconBrandJavascript />}
        text="JS with JSX"
        url="/component/excerpts"
      />
    </div>
  );
}
