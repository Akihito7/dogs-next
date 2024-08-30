import Link from "next/link";
import styles from "./header.module.css"
import Image from "next/image";

export default function Header() {
    return (
        <div className={styles.header}>
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
                <Link href="/login" className={styles.login}>Login / Criar</Link>
            </nav>
        </div>
    )
}