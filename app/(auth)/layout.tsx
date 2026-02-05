"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  return (
    <div>
      {navLinks.map((link) => {
        const isActive =
          pathName === link.href ||
          (pathName.startsWith(link.href) && link.href !== "/");

        return (
          <Link
            key={link.name}
            href={link.href}
            style={{
              marginRight: "1rem",
              fontWeight: isActive ? "bold" : "normal",
              color: isActive ? "red" : "yellow",
            }}
          >
            {link.name}
          </Link>
        );
      })}

      {children}
    </div>
  );
}
