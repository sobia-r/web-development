import React from 'react'
import styles from './About.module.css'

const About = () => {
  return (
    <section className={styles.container}>
        <div className={styles.topcloud}>
            <img src="src/assets/cloud.png" alt='cloud'/>
        </div>
        <div>
            <p className={styles.nametext}>
                I'am Sobia.
            </p>
            <p className={styles.skilltext}>
                a <span className={styles.underline}>pro</span>grammer.
            </p>
        </div>

        <div class={styles.bottomcloud}>
            <img  src="src/assets/cloud.png"  alt='cloud'/>
        </div>

        <div className={styles.mountain}>
            <img src="src/assets/mountain.png" alt='cloud'/>
        </div>
        
    </section>
    )
}

export default About
