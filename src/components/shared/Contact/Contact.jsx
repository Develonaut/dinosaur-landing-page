import React from "react";

import Header from "components/shared/Contact/Header/Header";
import TreeGreen from "components/shared/SVGs/TreeGreen";
import PlantBlue from "components/shared/SVGs/PlantBlue";
import PlantBlueYellow from "components/shared/SVGs/PlantBlueYellow";
import Stego from "components/shared/SVGs/Stego";
import Footer from "components/shared/Footer/Footer";

import styles from "components/shared/Contact/Contact.module.css";
const Contact = () => {
  return (
    <section className={styles.root}>
      <div className={styles.root__mask} />
      <section className={styles.root__content}>
        <Header className={styles.root__header} />
        <TreeGreen className={styles["root__tree-green"]} />
        <section className={styles["root__tree-wrapper"]}>
          <PlantBlue className={styles["root__plant-blue"]} />
          <PlantBlueYellow className={styles["root__blue-yellow"]} />
        </section>
        <Stego className={styles["root__stego"]} />
        <Footer />
      </section>
    </section>
  );
};

export default Contact;
