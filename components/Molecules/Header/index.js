import logoImg from "@/assets/logo.png";
import Link from "next/link";
import Image from "next/image";

import styles from "./header.module.css";
import { HeaderBackground } from "../";
import { NavLinks } from "../../Atons";

function Header() {
  return (
    <>
      <HeaderBackground />
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image src={logoImg} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>

        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLinks href="/meals">Browse Meals</NavLinks>
            </li>
            <li>
              <NavLinks href="/community"> Foodies Community</NavLinks>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
