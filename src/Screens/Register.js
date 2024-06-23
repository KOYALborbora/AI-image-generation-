import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import styles from "./Register.module.css";
import { ReactComponent as UserName } from "../Images/UserName.svg";
import { ReactComponent as Password } from "../Images/Password.svg";
import { ReactComponent as Email } from "../Images/Email.svg";


export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const toggleVisibilty = () => setShowPassword(!showPassword);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Create Your Account</h1>
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
        <div className={styles.firstInputContainer}>
          <input
            className={styles.firstInput}
            placeholder="Email"
            type="email"
          />
          <div className={styles.logo} onClick={toggleVisibilty}>
            <Email />
          </div>
        </div>
        <button className={styles.button}>Register</button>
        <p className={styles.para}>
          <i>
            Already have an account?<Link to="/login"> Login</Link>
          </i>
        </p>
      </div>
    </div>
  );
}
