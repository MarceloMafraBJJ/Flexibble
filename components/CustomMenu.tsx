import { Menu } from "@headlessui/react";
import Image from "next/image";

interface CustomMenuProps {
  title: string;
  state: string;
  filters: Array<string>;
  setState: (value: string) => void;
}

const CustomMenu = ({ title, filters, state, setState }: CustomMenuProps) => {
  return (
    <div className="flexStart flex-col w-full gap-4 relative">
      <label htmlFor={title} className="w-full text-gray-100">
        {title}
      </label>

      <Menu as="div" className="self-start relative">
        <div>
          <Menu.Button className="flexCenter gap-4 w-full rounded-md bg-light-white-100 p-4 text-base outline-none capitalize">
            {state || "Select a category"}
            <Image
              src="/arrow-down.svg"
              alt="arrow down"
              width={10}
              height={5}
            />
          </Menu.Button>
        </div>

        <Menu.Items className="flexStart flex-col absolute left-0 mt-2 xs:min-w-[300px] w-fit max-h-64 origin-top-right rounded-xl bg-white border border-nav-border shadow-menu overflow-y-auto">
          {filters.map((tag) => (
            <Menu.Item key={tag}>
              <button
                type="button"
                value={tag}
                className="text-left w-full px-5 py-2 text-sm hover:bg-light-white-100 self-start whitespace-nowrap capitaliz"
                onClick={(e) => setState(e.currentTarget.value)}
              >
                {tag}
              </button>
            </Menu.Item>
          ))}
        </Menu.Items>
      </Menu>
    </div>
  );
};

export default CustomMenu;
