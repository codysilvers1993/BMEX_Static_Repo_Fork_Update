import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import logo from '../public/bmex-ico.png'

export default function Home() {
  return (
      <div className={styles.container}>
        <Head>
          <title>Bayesian Mass Explorer</title>
          <meta name="description" content="Bayesian nuclear mass explorer" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
            <div className = {styles.header}>
          <a href="https://bmex.dev">
            <Image alt="BMEX Logo" src={logo} className = {styles.image}/>
          </a>
            </div>

          <div className={styles.grid}>

              <Link href="/data" passHref>
                <a className={styles.card}>
                  <h2>Masses and Filters &rarr;</h2>
                  <p>Binding energies and related quantities for experiment and various models.</p>
                </a>
              </Link>

              <Link href="/emulator" passHref>
                <a className={styles.card}>
                  <h2>Emulator &rarr;</h2>
                  <p>Binding energies and charge radii using a reduced basis method emulator.</p>
                </a>
              </Link>



              <Link href="/gpe" passHref>
                <a className={styles.card}>
                  <h2>Gaussian Process Extrapolar &rarr;</h2>
                  <p>Simple Gaussian Process explorer for nuclear models.</p>
                </a>
              </Link>

              <Link href="/pesnet" passHref>
                <a className={styles.card}>
                  <h2>PESnet &rarr;</h2>
                  <p>Dynamically produce nuclear potential energy surfaces using machine learning.</p>
                </a>
              </Link>

          </div>


          <div className={styles.boxCustom}>
              <Link href="https://beta.bmex.dev/masses" passHref>
                <a className={styles.card}>
                  <h2>Masses and Filters Beta &rarr;</h2>
                  <p>Binding energies and related quantities for experiment and various models, including additional beta features.</p>
                </a>
              </Link>
          </div>






        </main>

        <footer className={styles.footer}>
          <a href="https://github.com/massexplorer/bmex-static">&copy; 2022 BMEX Team</a>
        </footer>
      </div>
  )
}
