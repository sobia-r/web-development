import styles from'./App.module.css'
import About from './components/About/About'
import Hero from './components/Hero/Hero'

function App() {

  return (
    <div className={styles.container}>
      <About/>
      <Hero/>
    </div>
  )
}

export default App

