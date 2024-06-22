import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import styles from "./Login.module.css";
import { ReactComponent as UserName } from "../Images/UserName.svg";
export default function Login() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>diffusion.img</h1>
      <div className={styles.secondContainer}>
        <input className={styles.firstInput} placeholder="Username" />
        <input
          className={styles.firstInput}
          placeholder="Password"
          type="password"
        />
        <button className={styles.button}>Login</button>
        <p className={styles.para}>
          <i>
            Don't have an account?<Link to="/register"> Register</Link>
          </i>
        </p>
      </div>
      <p>
        <Link to="/forgot-password">FORGOT YOUR PASSWORD</Link>
      </p>
    </div>
  );
}
