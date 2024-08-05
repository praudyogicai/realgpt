"use client";

import React from "react";
import styles from "./page.module.css";

const Home = () => {
  const categories = {
    "Start Conversation": "basic-chat",
    // "Function calling": "function-calling",
    // "File search": "file-search",
    // All: "all",
  };

  return (
    <main className={styles.main}>
      <div className={styles.title}>
        Dubai Real Estate Expert
      </div>
      <div className={styles.container}>
        {Object.entries(categories).map(([name, url]) => (
          <a key={name} className={styles.category} href={`/examples/${url}`}>
            {"Toby"}
          </a>
        ))}
      </div>
    </main>
  );
};

export default Home;
