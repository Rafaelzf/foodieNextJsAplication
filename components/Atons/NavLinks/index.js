"use client";
import Link from "next/link";
import styles from "./navLinks.module.css";
import { usePathname } from "next/navigation";
function NavLinks({ href, children }) {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={
        path.startsWith(href) ? `${styles.link} ${styles.active}` : styles.Link
      }
    >
      {children}
    </Link>
  );
}

export default NavLinks;
