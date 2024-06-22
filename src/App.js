import Home from "./Screens/home";
import Login from "./Screens/Login";
import React from "react";
import styles from "./App.module.css";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <header className={styles.header}>
        <nav>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <Link to="/">HOME</Link>
            </li>
            <li className={styles.li}>
              <Link to="/generate">GENERATE</Link>
            </li>
            <li className={styles.li}>
              <Link to="/login">LOGIN/REGISTER</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
