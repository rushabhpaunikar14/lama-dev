import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgcontainer}>
        <Image src="/aboutimg.jpeg" 
        fill={true} 
        alt=""
        className={styles.img}
        />
        <div className={styles.imgtext}>
          <h1 className={styles.imgtitle}>Digital Storytellers</h1>
          <h2 className={styles.imgdesc}>
            Handcrafting award winning digital experiances
          </h2>
        </div>
      </div>
      <div className={styles.textcontainer}>
        <div className={styles.item}>
          <h1>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod veritatis dolore aperiam qui ad, ipsa rerum. <br /><br /> Itaque quis, delectus cum enim ipsam et rem aspernatur, debitis necessitatibus maiores, atque harum.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores blanditiis doloribus optio iure consequuntur possimus in placeat amet! Animi mollitia illo voluptas vel molestiae exercitationem voluptates delectus quia fugiat nemo?
          <br /><br />
          -Creative Ilustrations 
          <br /><br />
          -Dynamic Websites 
          <br /><br />
          -Fast and Handy Mobile Apps 
          </p>
          <Button url="/contact" text="Contact" />      
        </div>
      </div>
    </div>
  )
}

export default About
