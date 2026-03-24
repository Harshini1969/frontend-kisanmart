import React from "react";
import styles from "./settings.module.css";

function Settings() {

  const settings = [
    {
      title: "Your Profile",
      description: "Edit name, phone number and profile picture"
    },
    {
      title: "Login & Security",
      description: "Change password and email"
    },
    {
      title: "Your Address",
      description: "Manage delivery addresses"
    },
    {
      title: "Payment Methods",
      description: "Manage cards and payment options"
    },
    {
      title: "Orders",
      description: "View and track your orders"
    },
    {
      title: "Preferences",
      description: "Language and notification settings"
    }
  ];

  return (
    <div className={styles.container}>

      <h1>Your Account</h1>

      <div className={styles.grid}>

        {settings.map((item, index) => (
          <div key={index} className={styles.card}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}

      </div>

    </div>
  );
}

export default Settings;