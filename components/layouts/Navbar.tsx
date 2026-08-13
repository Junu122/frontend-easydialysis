"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GiKidneys } from 'react-icons/gi';

const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Dialysis Centers",
    href: "/dialysis-centers",
  },
  {
    label: "How It Works",
    href: "/how-it-works",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar navbar-expand-lg bg-white sticky-top border-bottom shadow-sm">
      <div className="container">
        {/* Logo */}
        <Link
          href="/"
          className="navbar-brand d-flex align-items-center gap-2"
        >
          <div className="dialycare-logo">
            <span><GiKidneys /></span>
          </div>

          <span className="dialycare-brand">
            Easy<span>Dialysis</span>
          </span>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#dialycareNavbar"
          aria-controls="dialycareNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation */}
        <div
          className="collapse navbar-collapse"
          id="dialycareNavbar"
        >
          {/* Navigation Links */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <li className="nav-item" key={link.href}>
                  <Link
                    href={link.href}
                    className={`nav-link ${
                      isActive ? "active dialycare-active" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right Actions */}
          <div className="d-flex align-items-center gap-2">
            <Link
              href="/sign-in"
              className="btn btn-outline-primary dialycare-signin"
            >
              Sign In
            </Link>

            <Link
              href="/booking"
              className="btn dialycare-book-btn"
            >
              Book Dialysis
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

