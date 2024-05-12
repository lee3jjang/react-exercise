import { useState } from "react";

export const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const menus = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Inbox", src: "Chat" },
    { title: "Accounts", src: "User", gap: true },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
  ];

  return (
    <div
      className={`${
        open ? "w-72" : "w-20"
      } duration-300 h-screen bg-dark-purple relative p-5 pt-8`}
    >
      <img
        className={`absolute cursor-pointer -right-3 top-9 w-7 border-2 border-dark-purple rounded-full ${
          !open && "rotate-180"
        }`}
        src="src/assets/control.png"
        onClick={() => setOpen(!open)}
      />
      <div className="flex gap-3 items-center">
        <img
          className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
          src="src/assets/logo.png"
        />
        <h1
          className={`text-white origin-left font-medium text-xl duration-300 ${
            !open && "scale-0"
          }`}
        >
          Designer
        </h1>
      </div>
      <ul className="pt-6">
        {menus.map((menu, index) => (
          <li
            key={index}
            className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${
              menu.gap ? "mt-9" : "mt-2"
            }`}
          >
            <img src={`src/assets/${menu.src}.png`} />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              {menu.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
