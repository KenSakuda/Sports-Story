import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
import SearchField from "@/app/_components/SearchField";
// import Menu from "@/app/_components/Menu";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logoLink}>
        <Image
          src="/logo_mystory.jpg"
          alt="Sports Story"
          className={styles.logo}
          width={240}
          height={50}
          priority
        />
      </Link>
      <SearchField />
    </header>
  );
}
