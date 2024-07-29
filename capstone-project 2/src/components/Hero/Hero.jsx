import React from 'react'
import styles from "./Hero.module.css"

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.Heroimage}>
            <img className={styles.image} src='src/assets/fi.jpeg' alt='hero pic'/>
        </div>
        <div className={styles.HeroContent}>
          <p className={styles.greet}>
            Hello.
          </p>
          
          <p className={styles.about}>
            I am an iOS and Web Developer. I'm the founder and CTO of The App Brewery. I ❤️ coffee and brew my own beers.
          </p>
          <footer>
            ....
          </footer>
        </div>

    </section>
  )
}

export default Hero