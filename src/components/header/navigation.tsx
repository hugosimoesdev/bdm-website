import Link from "next/link";

const links = [
  {
    route: "/#inicio",
    name: "Ínicio",
  },
  {
    route: "/#servicos",
    name: "Serviços",
  },
  {
    route: "/#parceiros",
    name: "Parceiros",
  },
];

export default function Navigation() {
  return (
    <nav className="hidden md:flex gap-8 items-center font-bold text-gray-details">
      {links.map((link, index) => {
        return (
          <Link
            href={link.route}
            key={`${link.name}_${index}`}
            className={`hover:text-yellow hover:underline hover:underline-offset-8 transition-all duration-200`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
