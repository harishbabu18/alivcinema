import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

export default function Advertisement() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Aliv Cinema - About Us</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <h1 className={styles.title}>Advertisement</h1>
        {/* <p>Basic Advertisement:-</p>
        <p>In Basic Advertisement a Model will explain your product while Showroom or Product play in Background.This Ad can be used for Advertising in Youtube, Facebook, Other Social Media and TV.</p>
        <p>Story Advertisement:-</p>
        <p>In Story Advertisement there will be a situation, We will showcase your product as solution for the situation.Example will be Saying in a Detergent advertisement stains are good and For Cleaning stains xyz detergent can help.</p>
        <p>Movie Advertisement:-</p>
        <p>We ALIV Cinema Produce Original content such as Short Films, Tele Films and Feature Film for Our Website Release ,Youtube Release,Other OTT Release ,Theatrical and Direct TV Release thus creating great recall Value.</p>
        <p>For Example:-</p>
        <p>Let's say we have to advertise a Restaurant.We will create a scene in the restaurant show the dishes delicious and Make actors Talk about the food.
          Let's assume we have to promote a property,We will shoot scenes of the movie in the property and exhibit as great place to be.</p>
 */}
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
