import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Bear, SocialMedias } from "../components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Japps - Mídia e Tecnologia</title>
        <meta
          property="og:title"
          content="Japps - Mídia e Tecnologia"
          key="title"
        />
        <meta name="theme-color" content="#1e69da" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Japps - Mídia e Tecnologia</h1>
        <Bear />
        <SocialMedias />
        <h1 className={styles.title2}>Site em construção...</h1>
      </div>
    </>
  );
}
