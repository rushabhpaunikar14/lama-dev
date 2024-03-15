import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better design for your digital product.</h1>
        <p className={styles.decs}>
          Turning your Idea into Reality. We bring together the teams from the globa tech industry.
        </p>
        <Button url="/portfolio" text=" See Our Works" />
        
      </div>

    <div className={styles.item}>
      <Image width={500} height={500} src="/hero.png" alt="" className={styles.img} />
    </div>
    </div>
  );
}
