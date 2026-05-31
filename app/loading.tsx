import Image from "next/image";
import styles from "./loading.module.css";

export default function Loading() {
  return (
    <div className={styles.loading}>
      <div className={styles.logoWrap}>
        <Image
          src="/alurol-logo-new.png"
          alt="ALUROL"
          width={220}
          height={78}
          priority
          className={styles.logo}
        />

        <div className={styles.spinner} />
      </div>
    </div>
  );
}