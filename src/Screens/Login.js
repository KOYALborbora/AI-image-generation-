import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import styles from "./Login.module.css";
import { ReactComponent as UserName } from "../Images/UserName.svg";
import { ReactComponent as Password } from "../Images/Password.svg";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const toggleVisibilty = () => setShowPassword(!showPassword);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>diffusion.img</h1>
      <div className={styles.secondContainer}>
        <div className={styles.firstInputContainer}>
          <input className={styles.firstInput} placeholder="Username" />
          <div className={styles.logo}>
            <UserName />
          </div>
        </div>
        <div className={styles.firstInputContainer}>
          <input
            className={styles.firstInput}
            placeholder="Password"
            type={showPassword ? "text" : "password"}
          />
          <div className={styles.logo} onClick={toggleVisibilty}>
            <Password />
          </div>
        </div>
        <button className={styles.button}>Login</button>
        <p className={styles.para}>
          <i>
            Don't have an account?<Link to="/register"> Register</Link>
          </i>
        </p>
      </div>
      <p style={{marginTop: "3%"}}> 
        <Link to="/forgot-password">FORGOT YOUR PASSWORD</Link>
      </p>
    </div>
  );
}
