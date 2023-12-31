"use client";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { usePathname } from "next/navigation";
export const metadata = {
  title: "First App (about)",
  description: "Generated by create next app",
};

export default function AboutLayout({
  children, // will be a page or nested layout
}) {
  const pathname = usePathname();
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <Navbar style={{ textDecoration: "none" }}>
        <div>common layout for about page</div>
        <div>{pathname == "/about" ? "About" : null}</div>
        <Link
          href="/about"
          style={{ marginRight: "10px", textDecoration: "none" }}
        >
          Main About
        </Link>
        <Link
          href="/about/contact"
          style={{ marginRight: "10px", textDecoration: "none" }}
        >
          Contact
        </Link>
        <Link
          href="/about/employee"
          style={{ marginRight: "10px", textDecoration: "none" }}
        >
          Employee
        </Link>
      </Navbar>
      {children}
    </section>
  );
}
