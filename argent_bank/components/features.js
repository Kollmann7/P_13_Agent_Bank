import styles from '../styles/Features.module.css'
import style from '../styles/sr-only.module.css'
import chat from '../img/icon-chat.png'
import money from '../img/icon-money.png'
import security from '../img/icon-security.png'
import Image from "next/image"


export default function Features () {
  return (
    <>     
    <section className={styles.features}> 
      <h2 className={style.sr}>Features</h2>
      <div className={styles.item} >
        <Image src={chat} alt="Chat Icon" className={styles.icon} height={100} width={100}/>
        <h3 className={styles.title}>You are our #1 priority</h3>
        <p>
          Need to talk to a representative? You can get in touch through our
          24/7 chat or through a phone call in less than 5 minutes.
        </p>
      </div>
      <div className={styles.item}>
        <Image
          src={money}
          alt="Chat Icon"
          className={styles.icon}
          height={100} width={100}
        />
        <h3 className={styles.title}>More savings means higher rates</h3>
        <p>
          The more you save with us, the higher your interest rate will be!
        </p>
      </div>
      <div className={styles.item}>
        <Image
          src={security}
          alt="Chat Icon"
          className={styles.icon}
          height={100} width={100}
        />
        <h3 className={styles.title}>Security you can trust</h3>
        <p>
          We use top of the line encryption to make sure your data and money
          is always safe.
        </p>
      </div>
    </section>  
    </>    
  )
}