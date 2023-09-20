import Link from "next/link";

const Menu = ({ path, title }) => {
  return (
    <Link
      className="px-4 py-2 transition-all duration-200 hover:shadow-sm hover:text-blue-500 hover:shadow-blue-400 "
      href={path}
    >
      {title}
    </Link>
  );
};

const MENU = [
  { path: "#home", title: "Home" },
  // { path: "#about", title: "About" },
  { path: "#skill", title: "Skill" },
  { path: "#education", title: "Education" },
  { path: "#experience", title: "Experience" },
  { path: "#projects", title: "Projects" },
  { path: "#footer", title: "Contact" },
];

const Header = () => {
  return (
    <div className="fixed top-0 flex items-center justify-between w-full p-5 bg-transparent">
      <div className="px-2 text-2xl">Sourav Ojha</div>
      <div className="flex gap-2">
        {MENU.map((item) => (
          <Menu key={item.title} path={item.path} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default Header;
