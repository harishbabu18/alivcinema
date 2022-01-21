import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

export default function AdvertisementCreatives() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Aliv Cinema - About Us</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <h1 className={styles.title}>
          Welcome to <a href="https://alivcinema.com">Aliv cinema</a>
        </h1>
      <span className={styles.logo}>
            <Image src="/alivcinema.png" alt="ALIV logo" width={415} height={130} />
          </span>
      </main>

      <footer className={styles.footer}>
        <a
          href="http://teraret.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/teraret.svg" alt="Teraret Logo" width={83} height={29} />
          </span>
          
        </a>
      </footer>
    </div>
  )
}
