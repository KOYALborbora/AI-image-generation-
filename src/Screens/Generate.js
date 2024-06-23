import React from "react";
import styles from "./Generate.module.css";
import {ReactComponent as Keyboard} from '../Images/Keyboard.svg'

export default function Generate() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        Describe your vision, and our AI will create it
      </h1>
      <div className={styles.secondContainer}>
        <div className={styles.imgContainer}>
          <div className={styles.img}>

          </div>
          <div className={styles.download}>
            <p className={styles.para}>Download</p>
          </div>
        </div>
        <div className={styles.thirdcontainer}>
            <p className={styles.para2}>Enter a text prompt describing the image you want:</p>
            <div className={styles.inputContainer}>
                <input className={styles.input} type="text" placeholder="Prompt"/>
                <div>
                    <Keyboard />
                </div>
            </div>
            <button className={styles.button}>GENERATE</button>
        </div>

      </div>
    </div>
  );
}
