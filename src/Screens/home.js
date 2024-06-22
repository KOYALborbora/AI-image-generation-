import React from "react";
import styles from "./home.module.css"


export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.upperContainer}>
        <h1 className={styles.header}>Welcome to Diffusion.img</h1>
        <p className={styles.para1}>Bring your imagination to life. Generate stunning images with AI.</p>
      </div>
      <div className={styles.bottomContainer}>
        <p className={styles.para2}> 
          Showcase a captivating image or short video demonstrating the 
          variety of images the AI can generate.
        </p>
        <button className={styles.button}>Get Started</button>
      </div>
    </div>
  );
}
