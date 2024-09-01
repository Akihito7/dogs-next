import Link from "next/link";
import styles from "./header.module.css"
import Image from "next/image";
import { getUser } from "@/src/actions/user-get";

export default async function Header() {
  const { data } = await getUser();
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link
          href="/"
          className={styles.logo}
        >
          <Image
            src={"./assets/dogs.svg"}
            alt="imagem de um focinho de cachorro"
            width={28}
            height={22}
            priority
          />
        </Link>
        {!data && <Link href="/login" className={styles.login}>Login / Criar</Link>}
        {data && <Link href="/account" className={styles.login}>{data.username}</Link>}
      </nav>
    </header>
  )
}