import styles from './index.module.scss'

const Home = () => {
  return (
    <div className={styles.Home}>
      <header>
        <h3>Header</h3>
      </header>
      <main>
        <section>
          <strong>Section 1</strong>
        </section>
        <section>
          <strong>Section 2</strong>
        </section>
      </main>
      <footer>
        <h3>Footer</h3>
      </footer>
    </div>
  )
}

export default Home
