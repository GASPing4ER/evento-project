import Link from "next/link";

const routes = [
  { name: "Terms & Conditions", path: "/terms-conditions" },
  { name: "Privacy Policy", path: "privacy-policy" },
];

const Footer = () => {
  return (
    <footer className="mt-auto flex items-center justify-between h-16 border-t border-white/10 px-3 sm:px-9 text-xs text-white/25">
      <small className="text-xs">
        &copy; 2024 G.S. Digital Anchor. All rights reserved.
      </small>
      <ul className="flex gap-x-3 sm:gap-8">
        {routes.map((route) => (
          <li key={route.path}>
            <Link href={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
